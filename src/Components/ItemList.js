import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ListControl from './ListControl';

const ItemList = props => {
  return (
    <View style={styles.container}>
      <View style={styles.lista}>
        <View style={styles.containerHeader}>
          <View style={styles.headerTitle}>
            <TouchableOpacity>
              <Text style={styles.title}>{props.detail}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerCategory}>
            <Text style={styles.categoria}>{props.categoria}</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text>{props.resumen}</Text>
        </View>
        <View>
          <ListControl date={props.fecha} />
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
    borderWidth: 1,
    borderColor: '#4c4c4c',
    padding: 10,
  },
  categoria: {
    backgroundColor: '#85E7F2',
    borderRadius: 5,
    padding: 5,
    fontSize: 10,
    fontWeight: 'bold',
  },
  containerHeader: {
    flexDirection: 'row',
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
