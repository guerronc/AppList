import {
  SET_LISTS,
  ERROR,
  GET_LIST,
  ADD_LIST,
  UPDATE_LIST,
  REMOVE_LIST,
  COMPLETE,
  SET_LIST_TODAY,
  SET_LIST_WEEK,
  SET_LIST_OLD,
} from '../types/listTypes';
import moment from 'moment';

export const getAll = () => async (dispatch, getState) => {
  try {
    const data = getState().list;
    dispatch({
      type: SET_LISTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => getAll => Detalle error: ${error.message}`,
    });
  }
};

export const getToday = () => async (dispatch, getState) => {
  try {
    console.log('today');
    const data = getState().list;
    const listToday = [...data];

    console.log('listToday: ', listToday);

    dispatch({
      type: SET_LIST_TODAY,
      payload: listToday,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => getToday => Detalle error: ${error.message}`,
    });
  }
};

export const getThisWeek = () => async (dispatch, getState) => {
  try {
    const data = getState().list;
    dispatch({
      type: SET_LIST_WEEK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => getAll => Detalle error: ${error.message}`,
    });
  }
};

export const getOld = () => async (dispatch, getState) => {
  try {
    const data = getState().list;
    dispatch({
      type: SET_LIST_OLD,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => getAll => Detalle error: ${error.message}`,
    });
  }
};

export const getComplete = () => async (dispatch, getState) => {
  try {
    const data = getState().list;
    dispatch({
      type: SET_LISTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => getAll => Detalle error: ${error.message}`,
    });
  }
};

export const getList = id => async (dispatch, getState) => {
  try {
    const data = getState().list;
    const result = data.find(list => list._id === id);
    dispatch({
      type: GET_LIST,
      payload: result,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => getList => Detalle error: ${error.message}`,
    });
  }
};

export const addList = newList => async (dispatch, getState) => {
  try {
    const list = getState().list;
    const updateList = [...list];
    console.log('Add lista 1');
    newList = {
      ...newList,
      _id: list.length + 1,
    };
    console.log('State1: ');
    updateList.push(newList);
    console.log('State2: ', getState());

    dispatch({
      type: ADD_LIST,
      payload: updateList,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => addList => Detalle error: ${error.message}`,
    });
  }
};

export const updateList = newList => async (dispatch, getState) => {
  try {
    const list = getState().list;
    const editList = [...list];
    const index = editList.findIndex(item => item._id === newList._id);

    editList[index] = {
      ...list[index],
      title: newList.title,
      date: newList.date,
      summary: newList.summary,
      complete: newList.complete,
      categories: newList.categories,
      items: newList.items,
    };

    dispatch({
      type: UPDATE_LIST,
      payload: editList,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => updateList => Detalle error: ${error.message}`,
    });
  }
};

export const deleteList = id => async (dispatch, getState) => {
  try {
    const list = getState().list;
    const removeList = [...list];
    const index = removeList.findIndex(item => item._id === id);

    removeList.splice(index, 1);

    dispatch({
      type: REMOVE_LIST,
      payload: removeList,
    });
    console.log('Luego de borrar', getState().list);
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => updateList => Detalle error: ${error.message}`,
    });
  }
};

export const toggleList = id => async (dispatch, getState) => {
  try {
    const list = getState().list;
    const completeList = [...list];
    const index = completeList.findIndex(item => item._id === id);
    const selected = completeList.find(item => item._id === id);

    completeList[index] = {
      ...list[index],
      complete: !selected.complete,
    };

    dispatch({
      type: COMPLETE,
      payload: completeList,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => updateList => Detalle error: ${error.message}`,
    });
  }
};
