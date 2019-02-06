import axios from 'axios';
import { FETCH_USER, FETCH_API_ALL } from './types';

export const fetchUser = () => async dispatch => {
  // console.log('action: fetching user');
  const res = await axios.get('/api/current_user');
  // console.log('action: current user is:', res);

  dispatch({type: FETCH_USER, payload: res.data});
}

// Fetches both branded and common food items for dropdown
export const fetchApiAll = (term) => async dispatch => {

  const config = {params: {searchQuery: term}};
  const res = await axios.get('api/instant', config);

  dispatch({type: FETCH_API_ALL, payload: res.data});
}
