import React, {Component} from 'react';
import {FlatList, Text} from 'react-native';
import ListLayout from '../Layout/ListLayout';

class List extends Component {
  render() {
    const list = [
      {
        key: 1,
        detail: 'item 1',
      },
      {
        key: 2,
        detail: 'item 2',
      },
      {
        key: 3,
        detail: 'item 3',
      },
      {
        key: 4,
        detail: 'item 4',
      },
    ];

    return (
      <ListLayout title='Supermercado'>
        <FlatList
          data={list}
          renderItem={({item}) => <Text>{item.detail}</Text>}
        />
      </ListLayout>
    );
  }
}

export default List;
