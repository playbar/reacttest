/**
 * Created by mac on 16/11/14.
 */

import React, {Component, PropTypes } from 'react';
import {View, Image, Text, TouchableHighlight } from 'react-native';

export default class MyScene extends Component{
    static PropTypes = {
        title:PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    };

    render(){
        return(
            <View>
                <Image source={require('./img/test.jpg')}>
                    <Text>Inside</Text>
                </Image>
                <Text>Current Scene:{this.props.title}</Text>
                <TouchableHighlight onProess = {this.props.onForward}>
                    <Text>点我进入下一个场景</Text>
                </TouchableHighlight>
                <TouchableHighlight onProess={this.props.onBack}>
                    <Text>点我返回上一个场景</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
