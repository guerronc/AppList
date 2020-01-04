import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

class ItemDetailList extends Component {
  state = {
    checked: false,
  };

  handleChange = isChecked => {
    this.setState({
      checked: isChecked,
    });
  };
  render() {
    const {categories, date} = this.props.data;
    return (
      <>
        <View style={styles.container}>
          <CheckBox
            value={this.state.checked}
            disable={false}
            onValueChange={this.handleChange}
          />
          <Text>{this.props.detail}</Text>
        </View>
        <View>
          <Text>{date}</Text>
          <Text>{categories}</Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
  },
  lista: {
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
  header: {
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detail: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ItemDetailList;
