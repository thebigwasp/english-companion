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

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='footer'>
        <div className='content footer-content'>
          <div>Meet the author of this website</div>
          <a href='https://www.linkedin.com/in/dzmitry-mukha-64434314a' target="_blank" rel="noopener noreferrer">
            <img src='LinkedIn_icon.svg' width='36px' height='36px'/>
          </a>
          <div>Hire me</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
