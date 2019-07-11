import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { RobotoReg, RobotoThin, AlexBrush } from './StyleText';
import { RadioButtons } from 'react-native-radio-buttons';
import { CheckBox } from 'react-native-elements';

export default class Reasons extends Component {
  constructor(props){
    super(props);
    this.state = {
      reasons: [],
      checked1: false,
      checked2: false,
      checked3: false
    }
  }
  static navigationOptions = {
    title: 'Select Reasons',
  };
  onSelected(value){
    if(value == 'Yes'){
      this.setState({isrepairable: 'Yes'});
    }else {
      this.setState({isrepairable: 'No'});
    }
  }

  submit(){
    this.setState({reasons: []});
    if(this.state.checked1){
      this.state.reasons.push('title1');
    }if(this.state.checked2){
      this.state.reasons.push('title2');
    }
    if(this.state.checked3){
      this.state.reasons.push('title3');
    }
    console.log(this.state.reasons);
  }

  render(){
    return(
      <View style={styles.container}>
        <RobotoThin style={styles.text}>Select Reasons</RobotoThin>
        <CheckBox containerStyle={{backgroundColor: 'black', width:300, borderColor: 'black'}} checkedColor='#fa7136' textStyle={{color: '#fa7136', fontFamily: 'roboto-thin', fontWeight: 'normal', fontSize: 20}}  title="reason1 jkfhakjh afhk" checked={this.state.checked1} onPress={() => this.setState({checked1: !this.state.checked1})}/>
        <CheckBox containerStyle={{backgroundColor: 'black', width: 300, borderColor: 'black'}} checkedColor='#fa7136' textStyle={{color: '#fa7136', fontFamily: 'roboto-thin', fontWeight: 'normal', fontSize: 20}} title="reason1 jkfhakjh afhk" checked={this.state.checked2} onPress={() => this.setState({checked2: !this.state.checked2})}/>
        <CheckBox containerStyle={{backgroundColor: 'black', width: 300, borderColor: 'black'}} checkedColor='#fa7136' textStyle={{color: '#fa7136', fontFamily: 'roboto-thin', fontWeight: 'normal', fontSize: 20}} title="reason1 jkfhakjh afhk" checked={this.state.checked3} onPress={() => this.setState({checked3: !this.state.checked3})}/>
        <TouchableOpacity style={styles.btn} onPress={this.submit.bind(this)}><RobotoThin style={{color: 'white', alignSelf: 'center', fontSize: 20}}>Submit</RobotoThin></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 40,
    color: '#fa7136',
    marginBottom: 20,
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
  }
});
