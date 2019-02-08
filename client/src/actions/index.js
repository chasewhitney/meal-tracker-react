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
  let res = await axios.get('api/instant', config);
  console.log('res.data:', res.data);

  const { data } = res;
  for (var arr in data) {
      if (data.hasOwnProperty(arr)) {
          data[arr].splice(10,10);

          // // Passes desired properties
          // if(arr === "branded") {
          //   data.branded = res.data[arr].map(({nix_item_id, food_name, photo, brand_name, serving_qty, serving_unit, nf_calories}) => ({nix_item_id, food_name, photo, brand_name, serving_qty, serving_unit, nf_calories}));
          // }
          // if(arr === "common") {
          //   data.common = res.data[arr].map(({food_name, photo}) => ({food_name, photo}));
          // }
      }
  }

  data.all = { branded: data.branded.slice(0,5), common: data.common.slice(0,5)};
  console.log('FD:', data);
  dispatch({type: FETCH_API_ALL, payload: data});
}
