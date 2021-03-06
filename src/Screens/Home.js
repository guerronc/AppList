import React, {Component, Fragment} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ListLayout from '../Layout/ListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import ItemList from '../components/ItemList';
import * as actionList from '../actions/actionList';
import {connect} from 'react-redux';
import Add from '../components/Add';

class Home extends Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      headerTitle: 'Home',
    };
  };

  renderEmpty = () => (
    <Empty text="Ingresa una lista en el boton de la parte inferior" />
  );
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <ItemList {...item} />;
  };
  renderFooter = () => {
    return <View style={styles.footer}></View>;
  };
  componentDidMount() {
    const {getAll} = this.props;
    getAll();
  }

  render() {
    return (
      <Fragment>
        <ListLayout title="ALL">
          <FlatList
            data={this.props.list}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={this.itemSeparator}
            renderItem={this.renderItem}
            keyExtractor={item => item._id.toString()}
            ListFooterComponent={this.renderFooter}
          />
        </ListLayout>
        <Add type="List" />
      </Fragment>
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

export default connect(mapStateToProps, actionList)(Home);
