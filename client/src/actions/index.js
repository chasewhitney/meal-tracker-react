import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  // console.log('action: fetching user');
  const res = await axios.get("/api/current_user");
  // console.log('action: current user is:', res);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Fetches both branded and common food items for dropdown
// export const fetchApiAll = (term) => async dispatch => {
//
//   const config = {params: {searchQuery: term}};
//   const res = await axios.get('/api/instant', config);
//   console.log('res.data:', res.data);
//
//   const { data } = res;
//   for (var arr in data) {
//       if (data.hasOwnProperty(arr)) {
//         data[arr].splice(10,10);
//       }
//   }
//
//   data.all = { branded: data.branded.slice(0,5), common: data.common.slice(0,5)};
//   console.log('FD:', data);
//   dispatch({type: FETCH_API_ALL, payload: data});
// }

///////// PRODUCTION ///////////////
// Fetches data on single API items
// export const fetchApiItem = (id, type) => async dispatch => {
//   const config = { params: {toQuery :id } };
//   const res = await axios.get(`/api/${type}`, config);
//
//   console.log('res.data:', res.data);
//   const resData = res.data.foods[0];
//   console.log('resData:', resData);
//
//
//   const foodObj = {};
//   foodObj.name = resData.food_name;
//   foodObj.img = resData.photo.thumb;
//   foodObj.servingSize = `${resData.serving_qty}${resData.serving_unit}`;
//   foodObj.servings = 1;
//   foodObj.calories = parseInt(resData.nf_calories);
//   foodObj.fat = parseInt(resData.nf_total_fat);
//   foodObj.carbs = parseInt(resData.nf_total_carbohydrate);
//   foodObj.fiber = parseInt(resData.nf_dietary_fiber);
//   foodObj.sugar = parseInt(resData.nf_sugars);
//   foodObj.protein = parseInt(resData.nf_protein);
//
//   console.log('foodObj:', foodObj);
//   dispatch({type: FETCH_API_ITEM, payload: foodObj});
// }

////////////// DEVELOPMENT ///////////////////////////
// export const fetchApiItem = (id, type) => dispatch => {
//
//   const foodObj = {};
//   foodObj.name = "Wheaties";
//   foodObj.servingSize = `1cup`;
//   foodObj.servings = 1;
//   foodObj.calories = 100;
//   foodObj.fat = 5;
//   foodObj.carbs = 10;
//   foodObj.fiber = 3;
//   foodObj.sugar = 2;
//   foodObj.protein = 1;
//   foodObj.img = "https://d1r9wva3zcpswd.cloudfront.net/576d9e8e7d920b7a1664cb59.jpeg";
//
//   dispatch({type: FETCH_API_ITEM, payload: foodObj});
// }
//////////////////// END DEVELOPMENT /////////////////////////////////////////

// export const submitNewMeal = (meal) => async dispatch => {
//   const res = await axios.post('/meals/addMeal', meal);
//
//   console.log('submitNewMeal res.data', res.data);
//
//   dispatch({type: FETCH_MEALS_TODAY, payload: res.data});
// }
//
// export const fetchMealsToday = () => async dispatch => {
//   const res = await axios.get('/meals/getToday');
//
//   console.log('fetchMealsToday res.data', res.data);
//
//   dispatch({type: FETCH_MEALS_TODAY, payload: res.data});
// }

export const addToFavorites = item => async dispatch => {
  console.log("addToFavorites action sending item:", item);

  const res = await axios.post("/meals/addFavorite", item);

  console.log("addToFavorites res.data:", res.data);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// export const deleteMeal = (id) => async dispatch => {
//   console.log('action deleting meal:', id);
//
//   const res = await axios.delete(`/meals/deleteMeal/${id}`);
//
//   console.log('deleting meal res.data:', res.data);
//   dispatch({type: FETCH_MEALS_TODAY, payload: res.data});
// }

export const deleteFavorite = id => async dispatch => {
  console.log("action deleting favorite:", id);

  const res = await axios.delete(`/meals/deleteFavorite/${id}`);

  console.log("deleting favorite res.data:", res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};
