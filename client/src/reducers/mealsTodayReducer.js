import { FETCH_MEALS_TODAY } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_MEALS_TODAY: {
      // console.log('in authReducer with payload:', action.payload);
      return action.payload || false;
    }
    default:
      return state;
  }
}
