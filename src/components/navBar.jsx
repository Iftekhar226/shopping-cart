import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
            <span className={this.getNavbarNotificationCountBadge()}>
              {this.props.count}
            </span>
          </a>
        </nav>
      </React.Fragment>
    );
  }

  getNavbarNotificationCountBadge = () => {
    let navNotificBadge = "badge m-2 badge-";
    navNotificBadge += this.props.count === 0 ? "warning" : "primary";
    return navNotificBadge;
  };
}
export default NavBar;
