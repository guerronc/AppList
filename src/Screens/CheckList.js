import React, {Component, Fragment} from 'react';
import {FlatList, View, StyleSheet, TextInput} from 'react-native';
import CheckListLayout from '../Layout/CheckListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import ItemDetailList from '../components/ItemDetailList';
import * as actionList from '../actions/actionList';
import {connect} from 'react-redux';
import Footer from '../components/Footer';
import Add from '../components/Add';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.data = props.selected ? props.selected : {};
  }
  renderEmpty = () => (
    <Empty text="No hay items para tu lista, ingresa en el boton de la parte inferior" />
  );
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <ItemDetailList {...item} data={this.data} />;
  };
  renderFooter = () => {
    return <Footer data={this.data} />;
  };

  renderHeader = () => {
    const {title, summary} = this.data;
    return (
      <View style={styles.containerTitle}>
        <TextInput style={styles.titleHeader}>{title}</TextInput>
        <TextInput style={styles.summaryHeader} multiline={true}>
          {summary}
        </TextInput>
      </View>
    );
  };

  render() {
    const {items} = this.data;

    return (
      <Fragment>
        <CheckListLayout>
          <FlatList
            ListHeaderComponent={this.renderHeader}
            data={items}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
            keyExtractor={item => item._id.toString()}
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

export default connect(mapStateToProps, actionList)(CheckList);
