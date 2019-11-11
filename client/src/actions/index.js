import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  console.log("action: fetching user");
  const res = await axios.get("/api/current_user");
  console.log("action: current user is:", res);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addToFavorites = item => async dispatch => {
  console.log("addToFavorites action sending item:", item);

  const res = await axios.post("/meals/addFavorite", item);

  console.log("addToFavorites res.data:", res.data);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteFavorite = id => async dispatch => {
  console.log("action deleting favorite:", id);

  const res = await axios.delete(`/meals/deleteFavorite/${id}`);

  console.log("deleting favorite res.data:", res.data);
  dispatch({ type: FETCH_USER, payload: res.data });
};
