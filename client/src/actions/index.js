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

  const filteredData = {};

  for (var arr in res.data) {
      if (res.data.hasOwnProperty(arr)) {
          res.data[arr].splice(10,10);

          // Passes desired properties
          if(arr === "branded") {
            filteredData.branded = res.data[arr].map(({food_name, photo, brand_name, serving_qty, serving_unit, nf_calories}) => ({food_name, photo, brand_name, serving_qty, serving_unit, nf_calories}));
          }
          if(arr === "common") {
            filteredData.common = res.data[arr].map(({food_name, photo}) => ({food_name, photo}));
          }
      }
  }


  console.log('FD:', filteredData);
  dispatch({type: FETCH_API_ALL, payload: filteredData});
}
