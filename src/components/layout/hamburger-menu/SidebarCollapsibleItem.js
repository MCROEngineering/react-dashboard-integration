import React, { Component } from "react";
import SimpleLineIcon from "react-simple-line-icons";
import SidebarItem from "./SidebarItem";

class SidebarCollapsibleItem extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collapsed: false,
      arrowType: 'arrow-right'
    }
  }
  
  renderCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed},
      () => this.setState({arrowType: this.state.collapsed ? 'arrow-down' : 'arrow-right'}));
  };
  
  render() {
    const { items, title, icon } = this.props;
    const { arrowType } = this.state;
    
    return (
      <div className='sidebar-item'>
        <div className='sidebar-item--link' onClick={this.renderCollapse}>
          <SimpleLineIcon name={icon} />
          {title}
          <SimpleLineIcon name={arrowType} size='small' style={{ fontWeight: 'bold', position: 'absolute', right: '.1rem' }}/>
        </div>
        {this.state.collapsed ? items.map((item, index) =>
          (<SidebarItem
            key={index}
            path={item.path}
            onHideMobileNavigationMenu={item.onHideMobileNavigationMenu}
            linkText={item.linkText}
            className={`${item.className} subitem`}
            icon={item.icon}
          />)) : null}
      </div>
    );
  }
}

export default SidebarCollapsibleItem;
