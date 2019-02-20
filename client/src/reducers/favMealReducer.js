import { FETCH_FAVORITES } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_FAVORITES: {
      // console.log('in authReducer with payload:', action.payload);
      return action.payload || false;
    }
    default:
      return state;
  }
}
