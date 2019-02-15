import { FETCH_API_ITEM } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_API_ITEM: {
      // console.log('in authReducer with payload:', action.payload);
      return action.payload || false;
    }
    default:
      return state;
  }
}
