import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, ImageBackground, Keyboard, KeyboardAvoidingView, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import Colors from '../constants/Colors';
import Layouts from '../constants/Layouts';
import { Ionicons } from '@expo/vector-icons';
import { getState } from '../constants/CofigureStore';
import iconsTypeAction from '../constants/reducers/icons/iconsTypeAction';

function LoginScreen(props) {
    const image = require('../assets/images/login_bk.png');

    return (
        <SafeAreaView style={{flex: 1, flexDirection: "column"}}>
            <StatusBar backgroundColor={Colors.bodyColor} />
            <ImageBackground source={image} style={{flex: 1, justifyContent:"center"}} imageStyle={{ resizeMode: "stretch"}}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={{flex:1}}
                    keyboardVerticalOffset={50}
                >
                    <ScrollView contentContainerStyle={{ flexGrow:1 , justifyContent:"center"}} >
                        <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
                        <Text style={{color: Colors.headerColor, fontSize: 40, fontWeight: "bold", paddingHorizontal:25}}>LOGIN</Text>
                            <View style={{paddingTop:40, paddingHorizontal:25, justifyContent:"space-around"}}>
                                <Text style={{color: Colors.bodyColor}}>Username</Text>
                                <TextInput placeholder="Username" style={{height: 40, borderColor: Colors.bodyColor, borderBottomWidth: 1}} placeholderTextColor={Colors.menuDefault} />
                            </View>
                            <View style={{paddingTop:40, paddingHorizontal:25, justifyContent:"space-around"}}>
                                <Text style={{color: Colors.bodyColor}}>Password</Text>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor: Colors.bodyColor}}>
                                    <TextInput placeholder="Password" style={{flex:1, height: 40}} placeholderTextColor={Colors.menuDefault} secureTextEntry={props.secureText} />
                                    <TouchableOpacity style={{ flexDirection:"row", paddingHorizontal:10}} onPress={() => props.handlerIcon() }>
                                        <Ionicons name={props.hidePassword} size={30} style={{paddingVertical:5}} color={Colors.bodyColor} />
                                        {/* <View style={{ borderWidth:1, height:20, width:20, borderColor: Colors.bodyColor, alignItems:"center", marginTop:10}}>
                                            <Text style={{color: Colors.bodyColor}}>?</Text>

                                        </View> */}
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                            <TouchableOpacity style={{ paddingHorizontal:25, alignSelf:"flex-end", paddingTop:10}}>
                                <Text style={{ color: Colors.bodyColor }}>Lupa password</Text>
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: 40, paddingTop:80, marginLeft:80}}>
                                <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                
                                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                                        <LinearGradient
                                            // Button Linear Gradient
                                            colors={[Colors.buttonDarkLogin, Colors.buttonLightLogin]}
                                            start={[0.9, 0.6][0.3, 0.1]}
                                            end={[0.9, 0.6][0.3, 0.1]}
                                            style={{ alignItems: 'center', borderRadius: 45, width:230 }}>
                                            <Text
                                            style={{
                                                backgroundColor: 'transparent',
                                                fontSize: 18,
                                                color: '#fff',
                                                fontWeight:"bold",
                                                paddingVertical: 30, paddingHorizontal:70,
                                            }}>
                                            LOGIN
                                            </Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={{ paddingHorizontal:25, alignSelf:"flex-end", paddingTop:10}}>
                                <Text style={{ color: Colors.bodyColor }}>Tidak punya akun? daftar</Text>
                            </TouchableOpacity>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
}

LoginScreen.navigationOptions = {
    header: null,
};

const mapStateToProps = (state) => {
    return {
        hidePassword: state.icons.iconHidePassword,
        secureText: state.icons.securePassword
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerIcon: async () => {
            const state = getState();
            let showIcon = state.icons.iconHidePassword;
            let secureText = state.icons.securePassword;
            if(showIcon == state.icons.iconShowPassword){
                showIcon = 'ios-eye-off';
                secureText = true;
            }else{
                showIcon = state.icons.iconShowPassword; 
                secureText = state.icons.secureFalsePassword;
            }
            
            await dispatch({ type: iconsTypeAction.HIDE_TEXT, hideText: showIcon});
            await dispatch({ type: iconsTypeAction.SECURE_TEXT, secureText: secureText});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);