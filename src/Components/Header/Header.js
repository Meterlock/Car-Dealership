import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-general">
        <div className="header-list">
          <ul className="list-items">
          {this.props.items.map((item) =>
            <li className="clickable" onClick={() => this.props.clickMenuCallback(item)}>{item}</li>)}
          </ul>
        </div>
        <div className="header-logout">
          <div className="logout-greeting">Hello, {this.props.username}!</div>
	        <div className="logout-button">
            <div className="clickable" onClick={this.props.logOutCallback}>Log Out</div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Header;