import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";


import Transaction from "./screens/HomeScreen";

import { LogBox } from "react-native";
import TabNavigator from "./components/TabNavigator";
import HomeScreen from "./screens/HomeScreen";
import Jan from "./screens/Jan";

LogBox.ignoreAllLogs();


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <Jan/>;
    }
    return null;
  }
}
