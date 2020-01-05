import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

const CheckListLayout = props => {
  return (
    <View style={styles.container}>
      <ScrollView>{props.children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    backgroundColor: '#F2BE22',
  },
});

export default CheckListLayout;
