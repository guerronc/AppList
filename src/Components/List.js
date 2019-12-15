import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import ListLayout from '../Layout/ListLayout';
import Empty from './Empty';
import Separator from './VerticalSeparator';
import ItemList from './ItemList';
import {connect} from 'react-redux';

class List extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <ItemList {...item} />;
  };
  renderFooter = () => {
    return (
      <View style={styles.footer}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <ListLayout title="TODAY">
        <FlatList
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
          ListFooterComponent={this.renderFooter}
        />
      </ListLayout>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
});

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(List);
