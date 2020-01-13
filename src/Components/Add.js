import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import NewList from './NewList';
import NewItem from './NewItem';

class Add extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button color="#7ED955" title="  ADD  " onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          animationIn="slideInUp"
          style={styles.modal}>
          {this.props.type === 'List' ? (
            <NewList onPress={this.toggleModal} />
          ) : (
            <NewItem onPress={this.toggleModal} />
          )}
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2BE22',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingVertical: 5,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export default Add;
