import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  
  KeyboardAvoidingView
} from "react-native";

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/h3.png");
const cal = require("../assets/01cal.jpg");

export default class Jan extends Component {
   
  render() {
   
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground source={bgImage} style={styles.bgImage}>
        <View style={styles.upperContainer}>         
            <Image source={appIcon} style={styles.appIcon} />
            </View>
            <View style={styles.lowerContainer}>
            <View style={styles.textinputContainer}>
            <Image source={cal} style={styles.appIcon} />

            <TouchableOpacity
              style={styles.scanbutton}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
             </TouchableOpacity>
              
                  
           </View>
            </View>
            </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  upperContainer: {
    flex:1,
    marginTop:10,
    alignItems:"center",
    marginBottom:100,
  },
  appIcon: {
   
    width: 700,
    height: 600,
    resizeMode: "contain",
  
  },
  lowerContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection:"row",
  },
  textinputContainer: {
    flex:0.8,
    borderWidth: 2,
    borderRadius: 10,
    alignItems:"center",
    backgroundColor: "#9DFD24",
    borderColor: "#FFFFFF"
  },
   
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#9DFD24",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText: {
    fontSize: 24,
    color: "#0A0101",
    fontFamily: "Rajdhani_600SemiBold"
  },
  
});
