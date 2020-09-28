import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { getState } from '../constants/CofigureStore';
import Colors from '../constants/Colors';

export default class AuthLoadingScreen extends React.Component {
    constructor(){
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async() => {
        const state = await getState();
        const isLoged = state.user.isLoged;
        this.props.navigation.navigate(isLoged ? 'Home' : 'Login');
    }

    render(){
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
                <ActivityIndicator size={"large"}/>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.headerColor}/>
            </View>
        )
    }
}