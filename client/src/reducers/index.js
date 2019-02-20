import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import apiAllReducer from './apiAllReducer';
import apiItemReducer from './apiItemReducer';
import mealsTodayReducer from './mealsTodayReducer';
import favMealReducer from './favMealReducer';

export default combineReducers({
  auth: authReducer,
  apiAll: apiAllReducer,
  apiItem: apiItemReducer,
  todayMeals: mealsTodayReducer,
  form: reduxForm,
  favMeals: favMealReducer,
});
