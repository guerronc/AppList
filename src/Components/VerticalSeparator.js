import React from 'react';
import {View, StyleSheet} from 'react-native';

const VerticalSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
});

export default VerticalSeparator;
