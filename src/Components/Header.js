import React from 'react';
import {Text, View, Image, StyleSheet, SafeAreaView} from 'react-native';
import Logo from '../../assets/logo.png';

const Header = props => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.right}>{props.children}</View>
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
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});

export default Header;
