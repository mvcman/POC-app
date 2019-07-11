import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, BackHandler } from 'react-native';
import { RobotoReg, RobotoThin, AlexBrush } from './StyleText';
import { RadioButtons } from 'react-native-radio-buttons';
import { Icon } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'To keep track of your equipments,\n' +
    'we use this application lets click on start',
});


// type Props = {};
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: 'Technician',
    }
  }


  static navigationOptions = {
    title: 'Home',
    headerRight: <Icon name='power-off' size={24}
                    color='white' type='font-awesome'
                    onPress={() => BackHandler.exitApp() } />
  };


  onSelected(value){
    if(value == 'Tester')
    {
    this.setState({
      selectedOption: 'Tester'
    });
  }else {
    this.setState({selectedOption: 'Technician'});
  }
  }
  render() {
    const { navigate } = this.props.navigation;
    const options = ['Technician', 'Tester'];
    function renderOption(option, selected, onSelect, index) {
        const style = selected ? { alignSelf: 'center', fontSize: 30, color: '#fa7136' } : {alignSelf: 'center', fontSize: 30, color: 'white'};
        const outer = selected ? {alignSelf: 'center', width: 15, height: 15, backgroundColor:'#fa7136', borderRadius: 50, marginHorizontal: 10} : {alignSelf: 'center', width: 15, height: 15, backgroundColor:'white', borderRadius: 50, marginHorizontal: 10}
        return (
          <View style={{flexDirection: 'row'}}>
            <View style={outer}  key={index + 100}></View>
            <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <RobotoThin style={style}>{option}</RobotoThin>
            </TouchableWithoutFeedback>
          </View>
        );
      }

    return (
      <View style={styles.container}>
        <Image source={require('../Images/mylogo.jpg')} style={{width: 200, height: 200, marginTop: 20}}/>
        <Text style={styles.welcome}>Select Profile</Text>
        <RadioButtons
          style={styles.radio}
          options={options}
          onSelection={this.onSelected.bind(this)}
          selectedOption={this.state.selectedOption}
          renderOption={renderOption}
        />
        <RobotoThin style={styles.subtitle}>Selected option: {this.state.selectedOption || 'none'}</RobotoThin>
        <TouchableOpacity style={styles.btn} onPress={() => navigate('Barcode')}><RobotoThin style={{fontSize: 25, color: 'white', alignSelf: 'center'}}>Start</RobotoThin></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    alignItems: 'center',
    backgroundColor: 'black',

  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    fontFamily: 'roboto-thin',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
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
});
