import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SidebarItem from "./SidebarItem";
import SidebarCollapsibleItem from "./SidebarCollapsibleItem";
import { onToggleNavigation } from "../../../actions/hamburgerMenu";

class Sidebar extends PureComponent {
  handleMouseDown = (e) => {
    
    if (window.innerWidth < 992) {
      this.props.onToggleNavigation();
      e.stopPropagation();
    }
  };
  
  render() {
    const {
      visibleMenu,
      onHideMobileNavigationMenu
    } = this.props;
    const navBarClass = visibleMenu ? "show-menu" : "hide-menu";
  
    return (
      <div>
        <div onMouseDown={this.handleMouseDown} className={`overlay-container ${navBarClass}`}></div>
        <div className={`sidebar-container ${navBarClass}`}>
          <aside className="row">
  
              <div className="sidebar">
                <div className='sidebar-title'>Components</div>
                <SidebarItem
                  path="/"
                  onHideMobileNavigationMenu={onHideMobileNavigationMenu}
                  linkText="Dashboard"
                  className='sidebar-item'
                  icon='list'
                />
                
                <SidebarCollapsibleItem
                  title="Features"
                  icon='login'
                  items={[
                    {
                      path: "/feature",
                      onHideMobileNavigationMenu: {onHideMobileNavigationMenu},
                      linkText: "Feature",
                      className: 'sidebar-item',
                      icon: 'pencil'
                    }
                  ]}
                />
              </div>
          </aside>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  visibleMenu: state.hamburgerMenu.visibleMenu,
  ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
  onToggleNavigation: () => dispatch(onToggleNavigation())
});

export default Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    pure: false
  }
)(Sidebar);
