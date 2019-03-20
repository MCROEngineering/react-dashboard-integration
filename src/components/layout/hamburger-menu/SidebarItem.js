import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SimpleLineIcon from 'react-simple-line-icons';


class SidebarItem extends Component {
  getPath = () => {
    return this.props.path;
  };
  
  onClickHandler = () => {
    const { onHideMobileNavigationMenu } = this.props;
  
    if (window.innerWidth < 992) {
      onHideMobileNavigationMenu && onHideMobileNavigationMenu();
    }
  };
  
  render() {
    const { className, linkText, icon } = this.props;
    
    return (
      <li className={`${className}`}>
        <NavLink  className='sidebar-item--link' activeClassName='active' exact to={this.getPath()} onClick={this.onClickHandler}>
          <SimpleLineIcon name={icon} />
          {linkText}
        </NavLink>
      </li>
    );
  }
}

export default SidebarItem;
