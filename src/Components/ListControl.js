import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Checked from '../../assets/checkedList.png';
import Delete from '../../assets/deleteList.png';
import Edit from '../../assets/editList.png';
import moment from 'moment';
import {withNavigation} from 'react-navigation';
import {NavigationActions} from 'react-navigation';
import * as actionList from '../actions/actionList';
import {connect} from 'react-redux';

const ListControl = props => {
  let date = moment(props.date, 'YYYYMMDD').fromNow();

  const handlePressItem = () => {
    const {traerLista} = props;
    traerLista(props._id);

    props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'CheckList',
      }),
    );
  };

  const deleteList = item => {
    Alert.alert(
      'Eliminar lista',
      'Seguro quiere eliminar la lista',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  const checkedList = item => {
    Alert.alert(
      'Marcar como completada',
      'La lista se movera a compleadas',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.containerControls}>
        <TouchableOpacity onPress={handlePressItem}>
          <Image style={styles.image} source={Edit} />
          <Text style={styles.textButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={checkedList}>
          <Image style={styles.image} source={Checked} />
          <Text style={styles.textButton}>Checked</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteList}>
          <Image style={styles.image} source={Delete} />
          <Text style={styles.textButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
  },
  containerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  image: {
    width: 35,
    height: 35,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  actionList,
)(withNavigation(ListControl));
