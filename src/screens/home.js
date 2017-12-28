import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { cssHome } from '../styles/cssHome';
import { StackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';
import { HomeScreen } from '../screens/home2'
export class home extends Component {
    static navigationOptions = {
        header: null,
      }
    render() {

        return (
            <View style={cssHome.container}>
                <Text>Welcome To Home </Text>

                <Button
                    onPress={() => this.props.navigation.navigate('Profile')}
                    title="Go to Lucy's profile"
                />
            </View>


        )
    }
}

export const SimpleStack = StackNavigator({
    Home: {
        screen: home
    },
    Profile: {
        screen: HomeScreen,
    },
},
    {
        transitionConfig: getSlideFromRightTransition
    });