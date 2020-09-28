import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, Platform, StyleSheet, View } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import { AuthLoadingScreen, LoginScreen } from './screens';
import { DashboardScreen, KebersihanScreen } from './screens/Home';


const Stack = createStackNavigator();

export default function Router(props) {
    const isLoadingComplete = useCachedResources();

    console.log(`is loading complete ${isLoadingComplete}`);
    if (!isLoadingComplete) {
        return (
            <View style={{ flex: 1, height: 500, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size={"large"} />
                <StatusBar barStyle="dark-content" backgroundColor="#fefefe" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
                <NavigationContainer linking={LinkingConfiguration}>
                    <Stack.Navigator initialRouteName="AuthLoading">
                        <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}}/>
                        <Stack.Screen name="Login" component={ LoginScreen } options={{headerShown: false}} />
                        <Stack.Screen name="AuthLoading" component={ AuthLoadingScreen } options={{headerShown: false}} />
                        <Stack.Screen name="Dashboard" component={ DashboardScreen } />
                        <Stack.Screen name="Kebersihan" component={ KebersihanScreen } />
                    </Stack.Navigator>
                </NavigationContainer>
                <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});