import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import ListLayout from '../Layout/ListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import ItemList from '../components/ItemList';
import * as actionList from '../actions/actionList';
import {connect} from 'react-redux';

class Home extends Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    return {
      headerTitle: 'Home',
    };
  };

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
  componentDidMount() {
    const {traerTodas} = this.props;
    traerTodas();
  }

  render() {
    return (
      <ListLayout title="TODAY">
        <FlatList
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          keyExtractor={item => item._id}
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

export default connect(mapStateToProps, actionList)(Home);
