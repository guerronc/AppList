import {
  ADD_LIST,
  REMOVE_LIST,
  UPDATE_LIST,
  GET_ALL_LIST,
  GET_LIST,
} from '../types/listTypes';

function list(state = {}, action) {
  switch (action.type) {
    case ADD_LIST:
      break;
    case REMOVE_LIST:
      break;
    case UPDATE_LIST:
      break;
    case GET_LIST:
      break;
    case GET_ALL_LIST: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default list;
