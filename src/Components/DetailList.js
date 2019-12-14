import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import CheckListLayout from '../Layout/CheckListLayout';
import Empty from './Empty';
import Separator from './VerticalSeparator';
import ItemDetailList from './ItemDetailList';

class DeatilList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <ItemDetailList {...item} />;
  };

  render() {
    const list = [
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
    ];

    return (
      <CheckListLayout title="Listas creadas">
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
        />
      </CheckListLayout>
    );
  }
}

export default DeatilList;
