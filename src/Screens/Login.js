import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login</Text>
        <Button
          title="Iniciar"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default Login;
