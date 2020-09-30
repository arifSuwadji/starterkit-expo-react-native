import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { getState } from '../constants/CofigureStore';
import Colors from '../constants/Colors';

export default class PageLoadingScreen extends React.Component {
    constructor(){
        super();
        const state = getState();
        this.state={
            isLoading: state.pages.isLoading
        }
        this._bootstrapAsync();
    }

    _bootstrapAsync = async() => {
        const state = await getState();
        const isLoged = state.user.isLoged;
        this.props.navigation.navigate(isLoged ? state.pages.defaultAuthPage : state.pages.defaultPage);
        setTimeout(() => {
            if(this.state.isLoading !== false){
                this.setState({ isLoading: false});
            }
        }, 500);
    }

    render(){
        return(
            <Modal
                transparent={true}
                animationType={'fade'}
                visible={this.state.isLoading}
                onRequestClose={() => {console.log('close modal')}}>
                <View style={{flex: 1,
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    backgroundColor: '#00000040'}}>
                    <View style={{backgroundColor: '#FFFFFF',
                        height: 100,
                        width: 100,
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around'}}>
                        <ActivityIndicator size={"large"} color={Colors.headerColor}/>
                    </View>
                </View>
                <StatusBar barStyle="dark-content" backgroundColor="#00000040" />
            </Modal>
        )
    }
}