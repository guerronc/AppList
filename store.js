import {createStore} from 'redux';
import reducer from './src/reducers/list';

const data = {
  list: [
    {
      key: '1',
      detail: 'Lista de herramientas y lista de compras de navidad',
      fecha: '2019-12-08',
      resumen: 'Lista para pruebas de la app de listas Lista para pruebas de la app de listas Lista para pruebas de la app de listas Lista para pruebas de la app de listas',
      completada: false,
      categoria: ['Herramientas', 'Papel'],
      autor: 'Cesar Guerron',
    },
    {
      key: '2',
      detail: 'Lista de supermercado',
      fecha: '2019-12-07',
      resumen: 'Lista para pruebas de la app de listas',
      completada: false,
      categoria: ['Supermercado'],
      autor: 'Cesar Guerron',
    },
    {
      key: '3',
      detail: 'Lista de compras',
      fecha: '2019-12-06',
      resumen: 'Lista para pruebas de la app de listas',
      completada: false,
      categoria: ['Compras'],
      autor: 'Cesar Guerron',
    },
    {
      key: '4',
      detail: 'Lista de papeleria',
      fecha: '2019-11-05',
      resumen: 'Lista para pruebas de la app de listas',
      completada: false,
      categoria: ['Papeleria'],
      autor: 'Cesar Guerron',
    },
    {
      key: '5',
      detail: 'Lista de viaje',
      fecha: '2019-10-05',
      resumen: 'Lista para pruebas de la app de listas',
      completada: false,
      categoria: ['Viaje'],
      autor: 'Cesar Guerron',
    },
    {
      key: '6',
      detail: 'Lista de navidad',
      fecha: '2019-11-05',
      resumen: 'Lista para pruebas de la app de listas',
      completada: false,
      categoria: ['Navidad', 'Compras'],
      autor: 'Cesar Guerron',
    },
  ],
  items: [
    {
      key: '1',
      detail: 'item 1',
      nota: 'Nota item 1',
      complete: false,
    },
    {
      key: '2',
      detail: 'item 2',
      nota: 'Nota item 1',
      complete: false,
    },
    {
      key: '3',
      detail: 'item 3',
      nota: 'Nota item 1',
      complete: false,
    },
    {
      key: '4',
      detail: 'item 4',
      nota: 'Nota item 1',
      complete: false,
    },
  ],
};

const store = createStore(reducer, data);

export default store;
