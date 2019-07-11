import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { RobotoReg, RobotoThin, AlexBrush } from './StyleText';
import { RadioButtons } from 'react-native-radio-buttons';

export default class IsRepairable extends Component {
  constructor(props){
    super(props);
    this.state = {
      isrepairable: 'Yes'
    }
  }
  static navigationOptions = {
    title: 'Status',
  };
  onSelected(value){
    if(value == 'Yes'){
      this.setState({isrepairable: 'Yes'});
    }else {
      this.setState({isrepairable: 'No'});
    }
  }

  submit(){
    if(this.state.isrepairable == 'No'){
      this.props.navigation.navigate('Details');
    }else {
      this.props.navigation.navigate('Reasons');
    }
  }

  render(){
    const options = ['Yes', 'No'];
    function renderOption(option, selected, onSelect, index) {
        const style = selected ? { alignSelf: 'center', fontSize: 30, color: '#fa7136' } : {alignSelf: 'center', fontSize: 30, color: 'white'};
        const outer = selected ? {alignSelf: 'center', width: 25, height: 25, backgroundColor:'#fa7136', borderRadius: 50, marginHorizontal: 10} : {alignSelf: 'center', width: 25, height: 25, backgroundColor:'white', borderRadius: 50, marginHorizontal: 10}
        return (
          <View style={{flexDirection: 'row'}}>
            <View style={outer}  key={index + 100}></View>
            <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <RobotoThin style={style}>{option}</RobotoThin>
            </TouchableWithoutFeedback>
          </View>
        );
      }
    return(
      <View style={styles.container}>
        <RobotoThin style={styles.text}>Repairable ?</RobotoThin>
        <RadioButtons
          options={options}
          onSelection={this.onSelected.bind(this)}
          selectedOption={this.state.isrepairable}
          renderOption={renderOption}
        />
        <TouchableOpacity style={styles.btn} onPress={this.submit.bind(this)}><RobotoThin style={{color: 'white', alignSelf: 'center', fontSize: 20}}>Submit</RobotoThin></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 50,
    color: '#fa7136',
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 100,
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
