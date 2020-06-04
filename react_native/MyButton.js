/**
 * Created by mac on 16/11/15.
 */

import React, {Component, PropTypes } from 'react';
import {View, Image, Text, TouchableHighlight } from 'react-native';


export default class MyButton extends Component{
    _onPressButton(){
        console.log("You tapped the button!");
    }

    render(){
        return(
            <TouchableHighlight onPress={this._onPressButton}>
                <Text>Button</Text>
            </TouchableHighlight>
        );
    }
}

