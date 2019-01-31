import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser = () => async dispatch => {
  // console.log('action: fetching user');
  const res = await axios.get('/api/current_user');
  // console.log('action: current user is:', res);
  dispatch({type: FETCH_USER, payload: res.data});
}
