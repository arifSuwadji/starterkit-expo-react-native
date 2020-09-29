import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Platform, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { getState } from './constants/CofigureStore';
import userTypeAction from './constants/reducers/user/userTypeAction';
import useCachedResources from './hooks/useCachedResources';
import usePermissionLocation from './hooks/usePermissionLocation';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import { AuthLoadingScreen, LoginScreen, PageLoadingScreen, RegisterScreen } from './screens';
import { DashboardScreen, KebersihanScreen, KesehatanScreen } from './screens/Home';


const Stack = createStackNavigator();

function Router(props) {
    const isLoadingComplete = useCachedResources();
    const isLocationComplete = usePermissionLocation();
    
    if (!isLoadingComplete) {
        return (
            <View style={{ flex: 1, height: 500, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator size={"large"} />
                <StatusBar barStyle="dark-content" backgroundColor="#fefefe" />
            </View>
        );
    } else {
        if(!isLocationComplete){
        }else{
            props.handlerLocation(isLocationComplete);
        }
        return (
            <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
                <NavigationContainer linking={LinkingConfiguration}>
                    <Stack.Navigator initialRouteName="AuthLoading">
                        {/* Default Pages */}
                        <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown: false}}/>
                        <Stack.Screen name="Login" component={ LoginScreen } options={{headerShown: false}} />
                        <Stack.Screen name="AuthLoading" component={ AuthLoadingScreen } options={{headerShown: false}} />
                        <Stack.Screen name="PageLoading" component={ PageLoadingScreen } options={{ headerShown: false}} />
                        <Stack.Screen name="Register" component={ RegisterScreen } options={{ headerShown: false }}/>
                        {/* Child Home Pages */}
                        <Stack.Screen name="Dashboard" component={ DashboardScreen } />
                        <Stack.Screen name="Kebersihan" component={ KebersihanScreen } />
                        <Stack.Screen name="Kesehatan" component={ KesehatanScreen } />
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

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerLocation: async (location) => {
            const state = getState();

            // console.log(`handler location ${JSON.stringify(location)}`);
            await dispatch({ type: userTypeAction.LOCATION, location: location});
            await dispatch({ type: userTypeAction.LATITUDE_REGISTER, latitudeRegister: location.latitude});
            await dispatch({ type: userTypeAction.LATITUDE_DINAMIS, latitudeDinamis: location.latitude});
            await dispatch({ type: userTypeAction.LONGTITUDE_REGISTER, longtitudeRegister: location.longitude});
            await dispatch({ type: userTypeAction.LONGTITUDE_DINAMIS, longtitudeDinamis: location.longitude});

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router);