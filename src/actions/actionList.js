import {SET_LISTS, ERROR, GET_LIST} from '../types/listTypes';
import Data from '../utils/data.json';

export const traerTodas = () => async dispatch => {
  try {
    dispatch({
      type: SET_LISTS,
      payload: Data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `Informacion de tareas no disponible. Detalle error: ${error.message}`,
    });
  }
};

export const traerLista = id => async dispatch => {
  try {
    const list = Data.filter(d => d._id === id);
    console.log('Lista: ', list);

    dispatch({
      type: GET_LIST,
      payload: list,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: `Informacion de tareas no disponible. Detalle error: ${error.message}`,
    });
  }
};
