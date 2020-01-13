import {
  ADD_LIST,
  REMOVE_LIST,
  UPDATE_LIST,
  GET_ALL_LIST,
  GET_LIST,
  SET_LISTS,
  ERROR,
  COMPLETE,
  SET_LIST_TODAY,
  SET_LIST_WEEK,
  SET_LIST_OLD,
} from '../types/listTypes';

const INITIAL_STATE = {
  list: [],
  today: [],
  thisWeek: [],
  old: [],
  selected: {},
  cargando: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {...state, list: action.payload, selected: {}};
    case REMOVE_LIST:
      return {...state, list: action.payload, selected: {}};
    case UPDATE_LIST:
      return {...state, list: action.payload};
    case GET_LIST: {
      return {...state, selected: action.payload};
    }
    case GET_ALL_LIST:
      break;
    case SET_LISTS: {
      return {...state, list: action.payload};
    }
    case SET_LIST_TODAY: {
      return {...state, today: action.payload};
    }
    case SET_LIST_WEEK: {
      return {...state, thisWeek: action.payload};
    }
    case SET_LIST_OLD: {
      return {...state, old: action.payload};
    }
    case COMPLETE: {
      return {...state, list: action.payload};
    }
    case ERROR:
      return {...state, error: action.payload, cargando: false};
    default:
      return state;
  }
};
