import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListLayout from '../Layout/ListLayout';
import Empty from './Empty';
import Separator from './VerticalSeparator';
import ItemList from '../Components/ItemList';
import {connect} from 'react-redux';

class List extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <ItemList {...item} />;
  };
  render() {
    const list = [
      {
        key: '1',
        detail: 'Lista de herramientas',
        fecha: '20191208',
        resumen: 'Resumen de la lista x de compras al valor y por z',
        completada: false,
        categoria: 'Herramientas',
        autor: 'Cesar Guerron',
      },
      {
        key: '2',
        detail: 'Lista de supermercado',
        fecha: '20191208',
        resumen: 'Resumen de la lista x de compras al valor y por z',
        completada: false,
        categoria: 'Supermercado',
        autor: 'Cesar Guerron',
      },
      {
        key: '3',
        detail: 'Lista de compras',
        fecha: '20191208',
        resumen: 'Resumen de la lista x de compras al valor y por z',
        completada: false,
        categoria: 'Compras',
        autor: 'Cesar Guerron',
      },
      {
        key: '4',
        detail: 'Lista de papeleria',
        fecha: '20191208',
        resumen: 'Resumen de la lista x de compras al valor y por z',
        completada: false,
        categoria: 'Papeleria',
        autor: 'Cesar Guerron',
      },
    ];

    return (
      <ListLayout title="Listas creadas">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
        />
      </ListLayout>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  null,
)(List);
