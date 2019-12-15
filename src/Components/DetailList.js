import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import CheckListLayout from '../Layout/CheckListLayout';
import Empty from './Empty';
import Separator from './VerticalSeparator';
import ItemDetailList from './ItemDetailList';
import {connect} from 'react-redux';

class DeatilList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <ItemDetailList {...item} />;
  };

  render() {
    return (
      <CheckListLayout title="Listas creadas">
        <FlatList
          data={this.props.items}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
        />
      </CheckListLayout>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  null,
)(DeatilList);
