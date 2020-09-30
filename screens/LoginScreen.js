import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Alert, ImageBackground, Keyboard, KeyboardAvoidingView, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import NextLoading from '../components/NextLoading';
import { getState } from '../constants/CofigureStore';
import Colors from '../constants/Colors';
import iconsTypeAction from '../constants/reducers/icons/iconsTypeAction';
import pagesTypeAction from '../constants/reducers/pages/pagesTypeAction';
import userTypeAction from '../constants/reducers/user/userTypeAction';

function LoginScreen(props) {
    const image = require('../assets/images/login_bk.png');

    // props.handlerEmptyState();

    return (
        <SafeAreaView style={{flex: 1, flexDirection: "column"}}>
            <StatusBar backgroundColor={Colors.bodyColor} />
            <NextLoading />
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
                                <TextInput placeholder="Username" style={{height: 40, borderColor: Colors.bodyColor, borderBottomWidth: 1}} placeholderTextColor={Colors.menuDefault} value={props.emailUser} onChangeText={(email) => props.handlerEmail(email)} />
                            </View>
                            <View style={{paddingTop:40, paddingHorizontal:25, justifyContent:"space-around"}}>
                                <Text style={{color: Colors.bodyColor}}>Password</Text>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor: Colors.bodyColor}}>
                                    <TextInput placeholder="Password" style={{flex:1, height: 40}} placeholderTextColor={Colors.menuDefault} secureTextEntry={props.secureText} value={props.passwordUser} onChangeText={(password) => props.handlerPassword(password)} />
                                    <TouchableOpacity style={{ flexDirection:"row", paddingHorizontal:10}} onPress={() => props.handlerIcon() }>
                                        <Ionicons name={props.hidePassword} size={30} style={{paddingVertical:5}} color={props.colorPassword} />
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
                                
                                    <TouchableOpacity onPress={() => props.handlerLogin(props)}>
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
                            <TouchableOpacity style={{ paddingHorizontal:25, alignSelf:"flex-end", paddingTop:10}} onPress={() => { props.handlerRegisterPage(props)}} >
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
        secureText: state.icons.securePassword,
        colorPassword: state.icons.colorIconPassword,
        emailUser: state.user.emailUser,
        passwordUser: state.user.passwordUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerEmail: async (email) => {
            await dispatch({ type: userTypeAction.EMAIL_USER, emailUser: email });
        },
        handlerPassword: async(password) => {
            await dispatch( { type: userTypeAction.PASSWORD_USER, passwordUser: password});
        },
        handlerIcon: async () => {
            const state = getState();
            let showIcon = state.icons.iconHidePassword;
            let secureText = state.icons.securePassword;
            let colorText = state.icons.colorIconPassword;
            if(showIcon == state.icons.iconShowPassword){
                showIcon = 'ios-eye';
                secureText = true;
                colorText = Colors.bodyColor;
            }else{
                showIcon = state.icons.iconShowPassword; 
                secureText = state.icons.secureFalsePassword;
                colorText = Colors.errorBackground;
            }
            
            await dispatch({ type: iconsTypeAction.HIDE_TEXT, hideText: showIcon});
            await dispatch({ type: iconsTypeAction.SECURE_TEXT, secureText: secureText});
            await dispatch({ type: iconsTypeAction.COLOR_TEXT, colorText: colorText});
        },
        handlerRegisterPage: async (props) => {
            await dispatch({ type: pagesTypeAction.NEXT_PAGE, nextPage: 'Register'});
            props.navigation.navigate('Register');
        },
        handlerEmptyState: async (props) => {
            await dispatch({ type: userTypeAction.EMAIL_USER, emailUser: ''});
            await dispatch({ type: userTypeAction.PASSWORD_USER, passwordUser: ''});
        },
        handlerLogin: async (props) => {
            const state = getState();
            if(state.pages.defaultPage !== 'Login'){
                await dispatch({ type: pagesTypeAction.DEFAULT_PAGE, defaultPage: 'Login'});
            }

            if(!state.user.emailUser){
                Alert.alert(
                    'siWarga',
                    'Username/email belum diisi',
                )
            }else if(!state.user.passwordUser){
                Alert.alert(
                    'siWarga',
                    'Password belum diisi',
                )
            }else{
                var formdata = new FormData();
                formdata.append("email", state.user.emailUser);
                formdata.append("password", state.user.passwordUser);
    
                var requestOptions = {
                    method: 'POST',
                    body: formdata,
                    redirect: 'follow'
                };

                let url = `${state.server.host}/${state.server.urlPath}/${state.server.urlPathLogin}`;
                console.log(url);
    
                props.navigation.navigate('PageLoading');
                const response = await fetch(url, requestOptions);
                const responseJson = await response.json();
                console.log('response json ', responseJson);
                if(responseJson.status === 200){
                    await dispatch({ type: userTypeAction.IS_LOGED, isLoged: 1});
                    await dispatch({ type: userTypeAction.TOKEN_USER, tokenUser: responseJson.token});
                    await dispatch({ type: userTypeAction.EMAIL_USER, emailUser: responseJson.data.email});
                    await dispatch({ type: userTypeAction.FK_RW_ID, fkRwId: responseJson.data.fk_rw_id});
                    await dispatch({ type: userTypeAction.NAMA_USER, namaUser: responseJson.data.nama});
                    await dispatch({ type: userTypeAction.HP_USER, hpUser: responseJson.data.phone});
                    await dispatch({ type: userTypeAction.ID_USER, idUser: responseJson.data.warga_id});
                    props.navigation.navigate('PageLoading');
                }else{
                    props.navigation.navigate('PageLoading');
                }
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);