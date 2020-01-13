import {
  SET_LISTS,
  ERROR,
  GET_LIST,
  ADD_LIST,
  UPDATE_TITLE_LIST,
  REMOVE_LIST,
  COMPLETE,
} from '../types/listTypes';

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

export const updateTitleList = (title, id) => async (dispatch, getState) => {
  try {
    const list = getState().list;
    const editList = [...list];
    const index = editList.findIndex(item => item._id === id);

    editList[index] = {
      ...list[index],
      title: title,
    };

    dispatch({
      type: UPDATE_TITLE_LIST,
      payload: editList,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `ActionList => updateList => Detalle error: ${error.message}`,
    });
  }
};

export const updateSummaryList = (summary, id) => async (
  dispatch,
  getState,
) => {
  try {
    const list = getState().list;
    const editList = [...list];
    const index = editList.findIndex(item => item._id === id);

    editList[index] = {
      ...list[index],
      summary: summary,
    };

    dispatch({
      type: UPDATE_TITLE_LIST,
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
