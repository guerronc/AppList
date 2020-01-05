import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';

const CheckListLayout = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{props.children}</ScrollView>
    </SafeAreaView>
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
