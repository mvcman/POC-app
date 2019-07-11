import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './Home';
import Barcode from './Barcode';
import ShowBarcode from './ShowBarcode';
import IsRepairable from './IsRepairable';
import Reasons from './Reasons';
import Details from './Details';

const HomeNavigator = createStackNavigator({
  Home: { screen: Home },
  Barcode: { screen: Barcode },
  ShowBarcode: {screen: ShowBarcode},
  IsRepairable: {screen: IsRepairable},
  Reasons: {screen: Reasons},
  Details: {screen: Details}
},{
  initialRouteName: 'Home',
  navigationOptions: ({navigation}) => ({
  headerStyle: {
    backgroundColor: '#fa7136', height: 40, marginTop: 23, padding: 15
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    color: '#fff',
    fontWeight: 'normal',
    fontFamily: 'roboto-reg',
    fontSize: 20,
  }
})
});
// const BarcodeNavigator = createStackNavigator({
//   Barcode: {screen: Barcode}
// },{
//   navigationOptions: ({navigation}) => ({
//   title: 'Scan Barcode',
//   headerStyle: {
//     backgroundColor: '#fa7136', height: 50
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     color: '#fff'
//   }
// })
// });
//
// const ShowBarcodeNavigator = createStackNavigator({
//   ShowBarcode: {screen: ShowBarcode}
// },{
//   navigationOptions: ({navigation}) => ({
//   title: 'List of Scan Barcodes',
//   headerStyle: {
//     backgroundColor: '#fa7136', height: 50
//   },
//   headerTintColor: '#fff',
//   headerTitleStyle: {
//     color: '#fff'
//   }
// })
// });
export default class Main extends Component {
  render(){
    return (
      <HomeNavigator />
    );
  }
}
