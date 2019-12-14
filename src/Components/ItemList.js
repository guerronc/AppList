import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ItemList = props => {
  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.detail}</Text>
          <Text>Type: {props.categoria}</Text>
        </View>
        <View style={styles.detail}>
          <Text>{props.resumen}</Text>
        </View>
        <View style={styles.footer}>
          <Text>Autor: {props.autor}</Text>
          <Text>Fecha: {props.fecha}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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

export default ItemList;
