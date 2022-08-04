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

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onNameKeyPress = this.onNameKeyPress.bind(this);
  }

  onNameKeyPress(event) {
    if (event.key === "Enter") {
      this.props.confirmUsername();
    }
  }

  render() {
    let content;
    if (this.props.name) {
      content =
        <React.Fragment>
          <div className='welcome-text'>
            <p>
              Welcome, {this.props.name}!
            </p>
            <p>
              To start speaking you can either choose to show yourself online or click on particular companion on the list
            </p>
          </div>
          <div>
            <label htmlFor='show-me-online'>Show me online</label>
            <input type='checkbox' id='show-me-online' onChange={this.props.toggleOnline} checked={this.props.online}/>
          </div>
        </React.Fragment>;
    } else {
      content =
        <React.Fragment>
          <div className='labeled-input'>
            <label htmlFor='name'>Hi, what's your name?</label>
            <input id='name' onKeyPress={this.onNameKeyPress} maxLength='50'/>
          </div>
          <div>
            <label htmlFor='remember-me'>Remember me</label>
            <input type='checkbox' id='remember-me'/>
          </div>
          <div className='confirm-name-button'>
            <button className='light-blue clickable' onClick={this.props.confirmUsername}>Confirm</button>
          </div>
        </React.Fragment>;
    }

    return (
      <React.Fragment>
        <div className='header'>
          <div className='content header-content'>
            {content}
          </div>
        </div>
        <div className='spacing'></div>
      </React.Fragment>
    );
  }
}

export default Header;
