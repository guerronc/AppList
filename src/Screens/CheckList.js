import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import CheckListLayout from '../Layout/CheckListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import ItemDetailList from '../components/ItemDetailList';
import {connect} from 'react-redux';

class CheckList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <ItemDetailList {...item} data={this.props.list[0]} />;
  };

  render() {
    const {items} = this.props.list[0];
    return (
      <CheckListLayout title={this.props.list[0].title}>
        {console.log('DetailItem:', items)}
        <FlatList
          data={items}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </CheckListLayout>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(CheckList);
