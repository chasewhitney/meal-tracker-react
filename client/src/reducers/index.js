import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import apiAllReducer from './apiAllReducer';
import apiItemReducer from './apiItemReducer';

export default combineReducers({
  auth: authReducer,
  apiAll: apiAllReducer,
  apiItem: apiItemReducer,
  form: reduxForm
});
