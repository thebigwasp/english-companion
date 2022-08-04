/**
 * @license
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import io from 'socket.io-client';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import getCookie from './cookie.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.socket = null;
    this.jitsiAPI = null;

    const name = getCookie('name');
    this.state = {
      onMeeting: false,
      online: false,
      id: null,
      name: name,
      usersOnline: {}
    };

    this.configureWebSocket = this.configureWebSocket.bind(this);
    this.confirmUsername = this.confirmUsername.bind(this);
    this.toggleOnline = this.toggleOnline.bind(this);
    this.joinUser = this.joinUser.bind(this);
    this.openMeeting = this.openMeeting.bind(this);
    this.closeMeeting = this.closeMeeting.bind(this);
  }

  componentDidMount() {
    this.configureWebSocket();
  }

  configureWebSocket() {
    const socket = io(process.env.REACT_APP_WEBSOCKET_ADDRESS);

    socket.on('id', (id) => {
      this.setState((prevState) => ({
        id: id
      }));
    });

    socket.on('newUserOnline', (user) => {
      this.setState((prevState) => {
        const usersOnline = {...prevState.usersOnline};
        usersOnline[user.id] = user;

        return {
          usersOnline: usersOnline
        };
      });
    });

    socket.on('userDisconnected', (id) => {
      this.setState((prevState) => {
        const usersOnline = {...prevState.usersOnline};
        delete usersOnline[id];

        return {
          usersOnline: usersOnline
        };
      });
    });

    socket.on('allUsersOnline', (usersOnline) => {
      this.setState((prevState) => ({
        usersOnline: usersOnline
      }));
    });

    socket.on('startMeeting', (roomName) => {
      socket.disconnect();
      this.openMeeting(roomName);
    });

    socket.on('disconnect', () => {
      this.setState((prevState) => ({
        online: false
      }));
    });

    this.socket = socket;
  }

  confirmUsername() {
    const name = document.getElementById('name').value;
    if (document.getElementById('remember-me').checked) {
      const now = new Date();
      now.setFullYear(now.getFullYear() + 1);
      document.cookie = `name=${name}; expires=${now.toUTCString()}`; // set cookie for a year
    }

    this.setState((prevState) => ({
      name: name
    }));
  }

  toggleOnline() {
    if (this.state.online) {
      this.socket.emit('hideOnline');
    } else {
      this.socket.emit('showOnline', this.state.name);
    }

    this.setState((prevState) => ({
      online: !prevState.online
    }));
  }

  joinUser(userId) {
    this.socket.emit('startMeeting', userId);
  }

  openMeeting(roomName) {
    const options = {
      analytics: {
        disabled: true
      },
      roomName: roomName,
      userInfo: {
        displayName: this.state.name
      },
      parentNode: document.getElementById('jitsi-meeting'),
      lang: 'en',
      configOverwrite: {
        prejoinPageEnabled: false
      }
    };

    this.jitsiAPI = new window.JitsiMeetExternalAPI('meet.jit.si', options);
    this.jitsiAPI.on('videoConferenceLeft', () => {
      this.closeMeeting();
    });
    this.jitsiAPI.on('participantLeft', () => {
      this.closeMeeting();
    });

    this.setState((prevState) => ({
        onMeeting: true
    }));
  }

  closeMeeting() {
    this.jitsiAPI.dispose();
    this.configureWebSocket();
    this.setState((prevState) => ({
      onMeeting: false
    }));
  }

  render() {
    let page = null;
    let style = {};
    if (!this.state.onMeeting) {
      page =
        <div className='wrapper'>
          <Header name={this.state.name} confirmUsername={this.confirmUsername} toggleOnline={this.toggleOnline} online={this.state.online}/>
          {this.state.name && <Main usersOnline={this.state.usersOnline} id={this.state.id} joinUser={this.joinUser}/>}
          <Footer/>
        </div>;
    } else {
      style.height = '100%';
      style.overflow = 'hidden';
    }

    return (
      <React.Fragment>
        <div style={style} id='jitsi-meeting'></div>
        {page}
      </React.Fragment>);
  }
}

export default App;
