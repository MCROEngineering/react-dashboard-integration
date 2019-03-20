import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from '../../assets/images/Logo.svg';
import { onToggleNavigation } from "../../actions/hamburgerMenu";

class DefaultHeader extends Component {
  render() {
    return(
      <header className="app-header">
        <div className="app-header-left">
          <div className="app-header-left--logo">
            <img src={Logo} alt="MCRO" />
          </div>
          <button className='app-header-left--toggler' onClick={() => this.props.onToggleNavigation()}>
            <span className='app-header-left--toggler__icon'></span>
          </button>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    visibleMenu: state.hamburgerMenu.visibleMenu,
    ...ownProps
  }
};

const mapDispatchToProps = (dispatch) => ({
  onToggleNavigation: () => dispatch(onToggleNavigation())
});

export default DefaultHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultHeader);
