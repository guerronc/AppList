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
    this.state = {
      title: this.data.title,
      summary: this.data.summary,
    };
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

  updateTitle = title => {
    const {updateTitleList} = this.props;
    const {_id} = this.data;

    this.setState({
      title: title,
    });
    updateTitleList(title, _id);
  };

  updateSummary = summary => {
    const {updateSummaryList} = this.props;
    const {_id} = this.data;

    this.setState({
      summary: summary,
    });
    updateSummaryList(summary, _id);
  };

  renderHeader = () => {
    return (
      <View style={styles.containerTitle}>
        <TextInput
          value={this.state.title}
          style={styles.titleHeader}
          onChangeText={text => this.updateTitle(text)}
        />
        <TextInput
          value={this.state.summary}
          style={styles.summaryHeader}
          onChangeText={text => this.updateSummary(text)}
          multiline={true}
        />
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
