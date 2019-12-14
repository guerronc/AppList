import {createStore} from 'redux';
import reducer from './src/reducers/list';

const store = createStore(reducer, {});

export default store;
