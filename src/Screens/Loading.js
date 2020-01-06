import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View>
        <Text>Loading</Text>
        <Button
          title="Iniciar"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}

export default Loading;
