import React, { Component } from 'react';
import { View, TouchableOpacity, Text, AsyncStorage, StyleSheet, TextInput, Picker } from 'react-native';
import { RobotoThin } from './StyleText';


function tsplit(value){
  var x = value;
  var separators = [',', ' ', '\\\[', '\\\]', '\\\"'];
  console.log(separators.join('|'));
  var tokens = x.split(new RegExp(separators.join('|'), 'g'));
  console.log(tokens);
  return tokens
}
export default class ShowBarcode extends Component {
  constructor(props){
    super(props);
    this.state = {
      barcode: [],
      first: '',
      second: ''
    }
  }
  static navigationOptions = {
    title: 'List of Scan Barcodes'
  };


  componentDidMount(){
    AsyncStorage.getItem('barcode').then((value) =>
    {
      //this.setState({barcode: value.split(',', '[', '"', ']')});
      this.setState({barcode: tsplit(value)})
      if(this.state.barcode[2].length == 7){
        this.setState({first: this.state.barcode[2], second: this.state.barcode[5]});
      }else {
        this.setState({first: this.state.barcode[5], second: this.state.barcode[2]});
      }
    });
}
  render(){
    console.log(this.state.barcode.length);
    if(this.state.barcode.length == 0 ){
      return(
      <View style={styles.container}>
        <RobotoThin style={styles.text}>Please Scan the Barcode!</RobotoThin>
        </View>
        );
    }
    else{
    return (
      <View style={styles.container}>
        <RobotoThin style={styles.text}>Scan Barcodes</RobotoThin>
        <View>
        <RobotoThin style={styles.label}>Model number :-</RobotoThin>
        <TextInput style={styles.barcode}
           onChangeText={(text) => this.setState({first: text})}
           value={this.state.first}/>
        <RobotoThin style={styles.label}>Serial number :-</RobotoThin>
         <TextInput style={styles.barcode}
            onChangeText={(text) => this.setState({second: text})}
            value={this.state.second}/>
        </View>
        <View style={{marginTop: 35, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', alignSelf: 'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Barcode', { scan: 'true' })} style={styles.buttons}><RobotoThin style={{ color: 'white', fontSize: 20}}>Scan Again</RobotoThin></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('IsRepairable')} style={styles.buttons}><RobotoThin style={{ color: 'white', fontSize: 20}}>Next</RobotoThin></TouchableOpacity>
        </View>
      </View>
    );
  }
}
}
// html color light orange #F0B27A
// #FBEEE6
// #DC7633 light orange
// #A6ACAF gray
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: '#fa7136',
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  text1: {
    color: '#fa7136',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 50,
  },
  barcode: {
    padding: 10,
    marginBottom: 10,
    height: 65,
    backgroundColor: '#DC7633',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    width: '90%',
    borderRadius: 1,
    alignSelf: 'center',
    fontFamily: 'roboto-thin',
    fontSize: 20,
  },
  buttons: {
    width: 180,
    height: 50,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#fa7136',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    color: 'white',
    alignSelf: 'center',
  },
  label: {
    color: '#fa7136',
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 20,
  }
});
