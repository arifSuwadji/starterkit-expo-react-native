import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Alert } from 'react-native';
import { DashboardScreen, KebersihanScreen } from '../screens/Home';


const Stack = createStackNavigator();
export default function HomeNavigator (props){
    Alert.alert(`ini adalah props ${props.routeName}`);
    return(
        <Stack.Navigator initialRouteName={props.routeName}>
            <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Kebersihan" component={KebersihanScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}