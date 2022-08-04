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

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let usersOnline;
    if (Object.keys(this.props.usersOnline).length > 0) {
      usersOnline = [];
      for (const id in this.props.usersOnline) {
        const user = this.props.usersOnline[id];
        if (user.id === this.props.id) {
          usersOnline.push(<tr key={user.id} className='light-green'><td>{user.name + ' ← This is you'}</td></tr>);
        } else {
          usersOnline.push(<tr key={user.id} className='clickable' onClick={() => this.props.joinUser(user.id)}><td>{user.name}</td></tr>);
        }
      }
    } else {
      usersOnline = <tr><td>No one is online atm =(</td></tr>;
    }

    return (
      <React.Fragment>
        <div className='main'>
          <div className='content'>
            <table className='light-blue'>
              <thead>
                <tr>
                  <th>People online</th>
                </tr>
              </thead>
              <tbody>
                {usersOnline}
              </tbody>
            </table>
          </div>
        </div>
        <div className='spacing'></div>
      </React.Fragment>
    );
  }
}

export default Main;
