import {
  ADD_LIST,
  REMOVE_LIST,
  UPDATE_LIST,
  GET_ALL_LIST,
  GET_LIST,
  SET_LISTS,
  ERROR,
} from '../types/listTypes';

const INITIAL_STATE = {
  list: {},
  selected: {},
  cargando: false,
  error: '',
};

function list(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_LIST:
      break;
    case REMOVE_LIST:
      break;
    case UPDATE_LIST:
      break;
    case GET_LIST: {
      return {...state, selected: action.payload};
    }
    case GET_ALL_LIST:
      break;
    case SET_LISTS: {
      return {...state, list: action.payload};
    }
    case ERROR:
      return {...state, error: action.payload, cargando: false};
    default:
      return state;
  }
}

export default list;
