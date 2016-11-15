/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  ListView,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

import MyScene from './MyScene';
import MyButton from './MyButton'


export default class reacttest extends Component {

  render() {
    return(
        <View>
          <Text>Current Scene:{this.props.title}</Text>
          <Text>点我进入下一个场景</Text>
          <MyButton />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
});

AppRegistry.registerComponent('reacttest', () => reacttest);
