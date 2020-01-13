import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
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
    return (
      <View style={styles.container}>
        <CheckBox
          value={this.state.checked}
          disable={false}
          onValueChange={this.handleChange}
        />
        <TextInput value={this.props.detail} />
      </View>
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
  detail: {
    padding: 15,
    alignItems: 'center',
  },
});

export default ItemDetailList;
