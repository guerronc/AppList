import React from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import Logo from '../../assets/logo.png';
import Notification from '../../assets/notification.png';

const Header = props => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.right}>AppList</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  notificacion: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#8D27F2',
    justifyContent: 'space-around',
  },
  right: {
    color: '#85E7F2',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 15,
  },
});

export default Header;
