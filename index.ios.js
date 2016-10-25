/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    ListView,
    View,
    Image
} from 'react-native';


class BlinkApp extends Component {

    constructor(props){
        super(props);
        const ds = new ListView.dataSource({rowHasChanged(r1, r2)=>r1 != r2});
        this.state = {
            dataSource:ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    render() {
        return (

        );
    }
}



AppRegistry.registerComponent('BlinkApp', () => BlinkApp);
