import axios from 'axios';
import { FETCH_USER, FETCH_API_ALL, FETCH_API_ITEM } from './types';

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
  console.log('res.data:', res.data);

  const { data } = res;
  for (var arr in data) {
      if (data.hasOwnProperty(arr)) {
        data[arr].splice(10,10);
      }
  }

  data.all = { branded: data.branded.slice(0,5), common: data.common.slice(0,5)};
  console.log('FD:', data);
  dispatch({type: FETCH_API_ALL, payload: data});
}

// Fetches data on single API items
export const fetchApiItem = (id, type) => async dispatch => {
  const config = { params: {toQuery :id } };
  const res = await axios.get(`/api/${type}`, config);
  console.log('res.data:', res.data);

  dispatch({type: FETCH_API_ITEM, payload: res.data.foods[0]});
}
