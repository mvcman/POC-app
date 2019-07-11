import React, { Component } from 'react';
import { AsyncStorage, Alert, View, Text, Vibration, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RobotoReg, RobotoThin, AlexBrush } from './StyleText';
import { BarCodeScanner } from 'expo-barcode-scanner';
// import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import BarcodeMask from 'react-native-barcode-mask';
//import { Actions } from 'react-native-router-flux';
import { Audio } from 'expo-av';

let a = 0;
const soundObject = new Audio.Sound();
export default class Barcode extends Component {
  constructor(props) {
    super(props);

    this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
    this.scannedCode = null;

    this.state = {
      data1: [],
      hasCameraPermission: null,
      isBarcodeScannerEnabled: true,
      scannedItem: null,
      barcode: [],
    };
  }
  static navigationOptions = {
    title: 'Scan Barcode',
  };
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    await this.setState({hasCameraPermission: status === 'granted'});
    await this.resetScanner();
  }
  async componentDidMount(){
    await soundObject.loadAsync(require('../assets/audios/beep.mp3'));
    await soundObject.playAsync();
  }
  renderAlert(title, message) {
    Alert.alert(
      title,
      message,
      [
        { text: 'OK', onPress: () => this.resetScanner() },
      ],
      { cancelable: true }
    );
  }
  dataIsin(data){
    var code = true;
    for(var i=0; i<= this.state.data1.length; i++){
      if(this.state.data1[i] == data){
        code = false
      }
    }
  return code
  }
  // const scan = this.props.navigation.getParam('scan', '') ? false : true;
  onBarCodeRead = (data, type) => {
    let mydata = this.dataIsin(data.data);
    let item = data.data;
    if (mydata && this.state.isBarcodeScannerEnabled == true ) {
      // Vibration.vibrate();
      console.log(data.data.length);
      console.log(`QRCode scanned: ${this.state.data1}`);
      if(item.length == 7 || item.length == 12)
      {
      this.state.data1.push(data.data);
        Vibration.vibrate();
      // Alert.alert('Scan Barcodes', JSON.stringify(this.state.data1));
      this.resetScanner();
      // this.setState({value: this.state.data1.length});
      // this.setState({isBarcodeScannerEnabled: false});
      if(this.state.data1.length >= 2)
      {
      AsyncStorage.setItem('barcode', JSON.stringify(this.state.data1));
      this.props.navigation.navigate('ShowBarcode');
      }
    }
    }

  }
  // next(){
  //   AsyncStorage.setItem('barcode', JSON.stringify(this.state.data1));
  //   this.props.navigation.navigate('ShowBarcode');
  //   // Actions.showbarcode()
  // }
  // componentwillUnMount(){
  //   this.setState({isBarcodeScannerEnabled: true});
  //  }
  renderMessage(){
    if (this.state.scannedItem && this.state.scannedItem.type) {
      const { type, data } = this.state.scannedItem;
      return (
        <RobotoThin style={styles.scanScreenMessage}>
          {`Scanned \n ${type} \n ${data}`}
        </RobotoThin>
      );
    }
    return <RobotoThin style={styles.scanScreenMessage}>Focus the barcode to scan.</RobotoThin>;
  }
  resetScanner() {
    this.scannedCode = null;
    this.setState({
      scannedItem: {
        type: null,
        data: null,
      }
    });
  }

  render() {
    const { hasCameraPermission } = this.state;
    // const scan = this.props.navigation.getParam('scan', '');
    if (hasCameraPermission === null) {
      return <RobotoThin style={{color: '#fa7136', marginTop: 30}}>Requesting for camera permission</RobotoThin>;
    }
    if (hasCameraPermission === false) {
      return <RobotoThin style={{color: '#fa7136', marginTop: 30}}>No access to camera</RobotoThin>;
    }
    return (

        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={this.onBarCodeRead}
            style={StyleSheet.absoluteFill}
          >
          <BarcodeMask width={'90%'} height={'90%'} marginTop={10} animatedLineColor='#fa7136' animatedLineHeight={1} edgeColor={'#fa7136'} transparency={0.8}/>
          <RobotoThin style={{alignSelf: 'center'}}>{this.renderMessage()}</RobotoThin>
          </BarCodeScanner>
          {
          // <TouchableOpacity onPress={this.next.bind(this)} style={styles.buttons}><Text style={{ color: 'white'}}>Next</Text></TouchableOpacity>
        }
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  scanScreenMessage: {
    fontSize: 20,
    color: '#fa7136',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  barcode: {
    width: '100%',
    height: 300,
    elevation: 5,
  },
  codes: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderColor: '#fa7136',
    borderWidth: 1,
  },
  text: {
    color: '#fa7136',
    fontSize: 10,
    margin: 10,
  },
  input: {
   width: '95%',
   height: 150,
   borderRadius: 3,
   borderColor: '#fa7136',
   borderWidth: 1,
   padding: 10,
   margin: 10,
   fontFamily: 'roboto-thin',
  },
});
