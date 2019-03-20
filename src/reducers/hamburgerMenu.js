import {
  TOGGLE_NAVIGATION_MENU
} from "../actions/types";

const DEFAULT_STATE = {
  visibleMenu: window.innerWidth > 992
};

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case TOGGLE_NAVIGATION_MENU:
      return { ...state, visibleMenu: !state.visibleMenu };
    default:
      return state;
  }
};
