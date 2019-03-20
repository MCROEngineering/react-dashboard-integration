import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth';
import hamburgerMenu from './hamburgerMenu';

export default combineReducers({
  auth,
  hamburgerMenu,
  form: formReducer,
});
