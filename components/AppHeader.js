import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Image source={require('../assets/h3.png')} style={{   
     width: 333,
    height: 106,
    alignItems: 'centre',}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#ff7d03',
  },

  image: {

  },
});
