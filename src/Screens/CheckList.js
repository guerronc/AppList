import React, {Component, Fragment} from 'react';
import {FlatList, View, StyleSheet, TextInput} from 'react-native';
import CheckListLayout from '../Layout/CheckListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import ItemDetailList from '../components/ItemDetailList';
import {connect} from 'react-redux';
import Footer from '../components/Footer';
import Add from '../components/Add';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

class CheckList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <ItemDetailList {...item} data={this.props.list[0]} />;
  };
  renderFooter = () => {
    return <Footer data={this.props.list[0]} />;
  };

  renderHeader = () => {
    return (
      <View style={styles.containerTitle}>
        <TextInput style={styles.titleHeader}>
          {this.props.list[0].title}
        </TextInput>
        <TextInput style={styles.summaryHeader} multiline={true}>
          {this.props.list[0].summary}
        </TextInput>
      </View>
    );
  };

  render() {
    const {items} = this.props.list[0];
    return (
      <Fragment>
        <CheckListLayout>
          <FlatList
            ListHeaderComponent={this.renderHeader}
            data={items}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ListFooterComponent={this.renderFooter}
          />
        </CheckListLayout>
        <Add />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  containerTitle: {
    paddingVertical: 10,
    flex: 1,
  },
  titleHeader: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  summaryHeader: {
    color: '#4c4c4c',
    marginBottom: 10,
    marginLeft: 8,
  },
});

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(CheckList);
