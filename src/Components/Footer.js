import React from 'react';
import moment from 'moment';
import {Text, View, StyleSheet} from 'react-native';

const Footer = props => {
  let date = moment(props.data.date, 'YYYYMMDD').fromNow();
  return (
    <View style={styles.container}>
      <View style={styles.containerDate}>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.containerCategorie}>
        <Text style={styles.categorie}>{props.data.categories}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  containerCategorie: {},
  containerDate: {},
  categorie: {
    backgroundColor: '#85E7F2',
    borderRadius: 5,
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 2,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Footer;
