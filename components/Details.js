import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native';
import { RobotoReg, RobotoThin, AlexBrush } from './StyleText';
import { RadioButtons } from 'react-native-radio-buttons';

export default class Details extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }
  static navigationOptions = {
    title: 'Enter Details',
  };

  render(){
    return(
      <View style={styles.container}>
        <RobotoThin style={styles.text}>Enter More Details</RobotoThin>
        <TextInput style = {styles.input}
               bordered
               placeholder = "Type Something in Text Area"
               multiline = {true}
               numberOfLines = {10}
               onChangeText = {(text) => this.setState({data: text})}/>
        <TouchableOpacity style={styles.btn}><RobotoThin style={{color: 'white', alignSelf: 'center', fontSize: 20}}>Submit</RobotoThin></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 40,
    color: '#fa7136',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 60,
    alignItems: 'center',
  },
  btn: {
    marginTop: 50,
    width: 200,
    backgroundColor: '#fa7136',
    height: 50,
    marginHorizontal: 20,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fa7136',
    color: 'white',
    width: '80%',
    borderRadius: 5,
    alignSelf: 'center',
    fontFamily: 'roboto-thin',
    fontSize: 20,
    textAlign: 'center',
  }
});
