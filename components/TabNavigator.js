import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import HomeScreen from "../screens/HomeScreen";
import Jan from "../screens/Jan";

const bgImage = require("../assets/bg.jpg");
const appIcon = require("../assets/h3.png");




export default class TabNavigator extends Component {


  render() {
    return (

      <View>
      <AppContainer/>
    </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Jan: Jan
 
},
{
  initialRouteName: 'HomeScreen',
});

const AppContainer = createAppContainer(AppNavigator);