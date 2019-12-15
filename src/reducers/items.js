import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  GET_ALL_ITEM,
  GET_ITEM,
} from '../types/itemTypes';

function item(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM:
      break;
    case REMOVE_ITEM:
      break;
    case UPDATE_ITEM:
      break;
    case GET_ITEM:
      break;
    case GET_ALL_ITEM: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default item;
