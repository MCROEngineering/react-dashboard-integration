import React, {Component} from 'react';
import '../assets/scss/main.scss';

import { connect } from "react-redux";

class MainWrapper extends Component {
  render() {
    const mainClass = this.props.visibleMenu ? "sidebar--active" : "";

    return (
      <div className={`main-container ${mainClass}`}>
        {this.props.children}
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  visibleMenu: state.hamburgerMenu.visibleMenu,
  ...ownProps
});

export default MainWrapper = connect(
  mapStateToProps
)(MainWrapper);

