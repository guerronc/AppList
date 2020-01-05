import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const Add = () => {
  return (
    <View style={styles.container}>
      <Button color="#7ED955" title="  ADD  " />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2BE22',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingVertical: 5,
  },
});

export default Add;
