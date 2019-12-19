import {
  ADD_ITEM,
  REMOVE_ITEM,
  UPDATE_ITEM,
  GET_ALL_ITEM,
  GET_ITEM,
  SET_ITEMS,
} from '../types/itemTypes';

const INITIAL_STATE = {
  list: [{}],
  items: [{}],
};

function item(state = INITIAL_STATE, action) {
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
    case SET_ITEMS: {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
}

export default item;
