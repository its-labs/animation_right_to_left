import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cssHome } from '../styles/cssHome';

export class HomeScreen extends Component {
  
    render() {
        return (
            <View style={cssHome.container}>
                <Text> Home Screen 2</Text>
            </View>
        )
    }
}