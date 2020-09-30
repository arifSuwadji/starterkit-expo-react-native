import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { ActivityIndicator, Alert, ImageBackground, Keyboard, KeyboardAvoidingView, Text, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import NextLoading from '../components/NextLoading';
import { getState } from '../constants/CofigureStore';
import Colors from '../constants/Colors';
import iconsTypeAction from '../constants/reducers/icons/iconsTypeAction';
import pagesTypeAction from '../constants/reducers/pages/pagesTypeAction';
import userTypeAction from '../constants/reducers/user/userTypeAction';

function RegisterScreen(props) {
    const image = require('../assets/images/login_bk.png');

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
                        <Text style={{color: Colors.headerColor, fontSize: 40, fontWeight: "bold", paddingHorizontal:25}}>DAFTAR</Text>
                            <View style={{paddingTop:40, paddingHorizontal:25, justifyContent:"space-around"}}>
                                <Text style={{color: Colors.bodyColor}}>Nama</Text>
                                <TextInput placeholder="Nama" style={{height: 40, borderColor: Colors.bodyColor, borderBottomWidth: 1}} placeholderTextColor={Colors.menuDefault} onChangeText={(nama) => props.handlerName(nama)} />
                            </View>
                            <View style={{paddingTop:5, paddingHorizontal:25, justifyContent:"space-around"}}>
                                <Text style={{color: Colors.bodyColor}}>Email</Text>
                                <TextInput placeholder="Email" style={{height: 40, borderColor: Colors.bodyColor, borderBottomWidth: 1}} placeholderTextColor={Colors.menuDefault} keyboardType="email-address" onChangeText={(email) => props.handlerEmail(email)} />
                            </View>
                            <View style={{paddingTop:5, paddingHorizontal:25, justifyContent:"space-around"}}>
                                <Text style={{color: Colors.bodyColor}}>Hp</Text>
                                <TextInput placeholder="Hp" style={{height: 40, borderColor: Colors.bodyColor, borderBottomWidth: 1}} placeholderTextColor={Colors.menuDefault} keyboardType="phone-pad" onChangeText={(hp) => props.handlerHp(hp)} />
                            </View>
                            <View style={{paddingTop:5, paddingHorizontal:25, justifyContent:"space-around"}}>
                                <Text style={{color: Colors.bodyColor}}>Password</Text>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor: Colors.bodyColor}}>
                                    <TextInput placeholder="Password" style={{flex:1, height: 40}} placeholderTextColor={Colors.menuDefault} secureTextEntry={props.secureText} onChangeText={(password) => props.handlerPassword(password)} />
                                    <TouchableOpacity style={{ flexDirection:"row", paddingHorizontal:10}} onPress={() => props.handlerIcon() }>
                                        <Ionicons name={props.hidePassword} size={30} style={{paddingVertical:5}} color={props.colorPassword} />
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                            <View style={{paddingTop:5, paddingHorizontal:25, justifyContent:"space-around"}}>
                                <Text style={{color: Colors.bodyColor}}>Konfirmasi Password</Text>
                                <View style={{flexDirection:"row", borderBottomWidth:1, borderColor: Colors.bodyColor}}>
                                    <TextInput placeholder="Konfirmasi Password" style={{flex:1, height: 40}} placeholderTextColor={Colors.menuDefault} secureTextEntry={props.secureKonfText} onChangeText={(konfPassword) => props.handlerKonfPassword(konfPassword) } />
                                    <TouchableOpacity style={{ flexDirection:"row", paddingHorizontal:10}} onPress={() => props.handlerKonfIcon() }>
                                        <Ionicons name={props.hideKonfPassword} size={30} style={{paddingVertical:5}} color={props.colorKonfPassword} />
                                    </TouchableOpacity>
                                    
                                </View>
                            </View>
                            <View style={{ paddingHorizontal: 40, paddingTop:30, marginLeft:100}}>
                                <View
                                style={{
                                    flex: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                
                                    <TouchableOpacity onPress={() => props.handlerRegister(props)}>
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
                                            DAFTAR
                                            </Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity style={{ paddingHorizontal:25, alignSelf:"flex-end", paddingTop:5}} onPress={() => { props.handlerLoginPage(props) } }>
                                <Text style={{ color: Colors.bodyColor }}>Sudah punya akun? masuk</Text>
                            </TouchableOpacity>
                        </TouchableWithoutFeedback>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </SafeAreaView>
    );
}

function nextPage(props){
    props.nextPage(props);
}

RegisterScreen.navigationOptions = {
    header: null,
};

const mapStateToProps = (state) => {
    return {
        hidePassword: state.icons.iconHidePassword,
        secureText: state.icons.securePassword,
        hideKonfPassword: state.icons.iconHideKonfPassword,
        secureKonfText: state.icons.secureKonfPassword,
        colorPassword: state.icons.colorIconPassword,
        colorKonfPassword: state.icons.colorIconKonfPassword
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlerLoginPage: async (props) => {
            await dispatch({ type: userTypeAction.EMAIL_USER, emailUser: ''});
            await dispatch({ type: userTypeAction.PASSWORD_USER, passwordUser: '' });
            await dispatch({ type: pagesTypeAction.IS_LOADING, isLoading: true});
            await dispatch({ type: pagesTypeAction.DEFAULT_PAGE, defaultPage: 'Login'});
            props.navigation.navigate('PageLoading');
        },
        handlerName: async (nama) => {
            await dispatch({ type: userTypeAction.NAMA_USER, namaUser: nama});
        },
        handlerEmail: async (email) => {
            await dispatch({ type: userTypeAction.EMAIL_USER, emailUser: email });
        },
        handlerHp: async (hp) => {
            await dispatch({ type: userTypeAction.HP_USER, hpUser: hp});
        },
        handlerPassword: async(password) => {
            await dispatch( { type: userTypeAction.PASSWORD_USER, passwordUser: password});
        },
        handlerKonfPassword: async(konfPassword) => {
            await dispatch({ type: userTypeAction.KONF_PASSWORD_USER, konfPasswordUser: konfPassword });
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
        handlerKonfIcon: async () => {
            const state = getState();
            let showIcon = state.icons.iconHideKonfPassword;
            let secureText = state.icons.secureKonfPassword;
            let colorKonfText = state.icons.colorIconKonfPassword
            if(showIcon == state.icons.iconShowKonfPassword){
                showIcon = 'ios-eye';
                secureText = true;
                colorKonfText = Colors.bodyColor;
            }else{
                showIcon = state.icons.iconShowKonfPassword; 
                secureText = state.icons.secureFalseKonfPassword;
                colorKonfText = Colors.errorBackground;
            }
            
            await dispatch({ type: iconsTypeAction.HIDE_KONF_TEXT, hideKonfText: showIcon});
            await dispatch({ type: iconsTypeAction.SECURE_KONF_TEXT, secureKonfText: secureText});
            await dispatch({ type: iconsTypeAction.COLOR_KONF_TEXT, colorKonfText: colorKonfText});
        },
        handlerRegister: async (props) => {
            const state = getState();
            if(state.pages.defaultPage !== 'Register'){
                await dispatch({ type: pagesTypeAction.DEFAULT_PAGE, defaultPage: 'Register'});
            }

            if(!state.user.namaUser){
                Alert.alert(
                    'siWarga',
                    'Nama belum diisi',
                )
                
            }else if(!state.user.emailUser){
                Alert.alert(
                    'siWarga',
                    'Email belum diisi',
                )
            }else if(!state.user.passwordUser){
                Alert.alert(
                    'siWarga',
                    'Password belum diisi',
                )
            }else if(!state.user.hpUser){
                Alert.alert(
                    'siWarga',
                    'Hp belum diisi',
                )
            }else if(!state.user.latitudeRegister){
                Alert.alert(
                    'siWarga',
                    'Tidak dapat mengakses lokasi anda',
                )
            }else if(!state.user.longtitudeRegister){
                Alert.alert(
                    'siWarga',
                    'Tidak dapat mengakses lokasi anda',
                )
            }else{
                if(state.user.passwordUser !== state.user.konfPasswordUser){
                    Alert.alert(
                        'siWarga',
                        'Password tidak sama dengan konfirmasi password'
                    )
                }else{
                    var formdata = new FormData();
                    formdata.append("fk_rw_id", "001");
                    formdata.append("nama", state.user.namaUser);
                    formdata.append("email", state.user.emailUser);
                    formdata.append("password", state.user.passwordUser);
                    formdata.append("phone", state.user.hpUser);
                    formdata.append("latitude", state.user.latitudeRegister);
                    formdata.append("longtitude", state.user.longtitudeRegister);
        
                    var requestOptions = {
                        method: 'POST',
                        body: formdata,
                        redirect: 'follow'
                    };

                    let url = `${state.server.host}/${state.server.urlPath}/${state.server.urlPathRegister}`;
                    console.log(url);
        
                    props.navigation.navigate('PageLoading');
                    const response = await fetch(url, requestOptions);
                    const responseJson = await response.json();
                    console.log('response json ', responseJson);
                    if(responseJson.status === 200){
                        props.navigation.navigate('PageLoading');
                        await dispatch({ type: userTypeAction.EMAIL_USER, emailUser: ''});
                        await dispatch({ type: userTypeAction.PASSWORD_USER, passwordUser: ''});
                        await dispatch({ type: userTypeAction.FK_RW_ID, fkRwId: responseJson.data.fk_rw_id});
                        await dispatch({ type: userTypeAction.ID_USER, idUser: responseJson.data.warga_id});
                        Alert.alert(
                            'siWarga',
                            'Terimakasih, anda telah mendaftarkan diri sebagai warga siWarga',
                            [
                                {
                                    text: 'OK',
                                    onPress: () => nextPage(props)
                                }
                            ]
                        )
                    }else{
                        Alert.alert(
                            'siWarga',
                            Object.values(responseJson).toString()
                        )
                    }
                }
            }
        },
        nextPage: async (props) =>{
            await dispatch({ type: pagesTypeAction.DEFAULT_PAGE, defaultPage: 'Login'});
            props.navigation.navigate('PageLoading');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);