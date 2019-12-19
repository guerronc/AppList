import {SET_LISTS, ERROR} from '../types/listTypes';
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
