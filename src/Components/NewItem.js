import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import * as actionList from '../actions/actionList';

class NewItem extends Component {
  handleGuardar = () => {
    const newList = {
      _id: 0,
      title: 'Lista de compras',
      date: '2020-01-12',
      summary: 'Detalle de la primera lista',
      complete: false,
      categories: ['travel', 'food', 'books'],
      items: [],
    };

    const {addList} = this.props;
    addList(newList);
    this.props.onPress();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ingreso de datos</Text>
        <View style={styles.containerText}>
          <TextInput
            style={styles.text}
            placeholder="Ingrese item de la lista"
            autoFocus={true}
          />
        </View>
        <View style={styles.containerButton}>
          <View style={styles.button}>
            <Button
              color="#7ED955"
              title="Guardar"
              onPress={this.handleGuardar}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#7ED955"
              title="Cancelar"
              onPress={this.props.onPress}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2BE22',
  },
  containerText: {},
  containerButton: {
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-evenly',
  },
  style: {
    padding: 5,
  },
  text: {
    backgroundColor: '#F2BE22',
    padding: 10,
  },
  button: {
    padding: 5,
    margin: 5,
    width: 170,
  },
  title: {
    paddingBottom: 10,
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, actionList)(NewItem);
