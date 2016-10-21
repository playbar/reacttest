/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class reacttest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Image style={styles.pic}
            source={{uri: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2919521866,1160120689&fm=58'}}>
        </Image>
        <View style={styles.style_1}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth:3,
    borderColor:'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  pic: {
    width:100,
    height:100,
  },
  style_1:{
    flex: 5,
    height:40,
    borderWidth: 1,
    borderColor: 'red',
  }
});

AppRegistry.registerComponent('reacttest', () => reacttest);
