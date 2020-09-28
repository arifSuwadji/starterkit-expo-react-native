import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import HomeIcons from '../components/HomeIcons';
import Colors from '../constants/Colors';
import Layouts from '../constants/Layouts';

function HomeScreen(props) {
    return (
        <View style={{ flex: 1 , backgroundColor: Colors.bodyColor, marginTop: Layouts.statusBarHeight, height: Layouts.wHeight}}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.headerColor}/>
            <View style={{position: 'relative', alignItems:'center'}}>
                <View style={{ width:'100%', height:'100%', position:'absolute', top:0, left:0, backgroundColor: Colors.headerColor, opacity:1, borderRadius:6}}></View>
                <Image source={require('../assets/images/logo-siwarga.png')} style={{width:'80%', opacity:1}} />
            </View>
            <View style={{flexDirection: 'row', flexWrap:'wrap', marginHorizontal: 0, marginTop: 18}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', widht:'100%', flexWrap:'wrap'}}>
                    <HomeIcons title='DASHBOARD' img={require('../assets/images/home/icon_menu_update_data.png')} onPress={() => props.navigation.navigate('Dashboard')} />
                    <HomeIcons title='KEBERSIHAN' img={require('../assets/images/home/icon_menu_kebersihan.png')} onPress={() => props.navigation.navigate('Kebersihan')} />
                    <HomeIcons title='KESEHATAN' img={require('../assets/images/home/icon_menu_kesehatan.png')} onPress={() => props.navigation.navigate('Login')}/>
                    <HomeIcons title='SOSIAL' img={require('../assets/images/home/icon_menu_sosial.png')}/>
                    <HomeIcons title='FASILITAS UMUM' img={require('../assets/images/home/icon_menu_sarana_umum.png')}/>
                    <HomeIcons title='KEMATIAN' img={require('../assets/images/home/icon_menu_kematian.png')}/>
                    <HomeIcons title='KEAMANAN' img={require('../assets/images/home/icon_menu_keamanan.png')}/>
                    <HomeIcons title='BANJIR' img={require('../assets/images/home/icon_menu_banjir.png')}/>
                    <HomeIcons title='KEBAKARAN' img={require('../assets/images/home/icon_menu_kebakaran.png')}/>
                    <HomeIcons title='SURAT PENGANTAR' img={require('../assets/images/home/icon_menu_surat.png')}/>
                    <HomeIcons title='KULINER' img={require('../assets/images/home/icon_menu_food.png')}/>
                    <HomeIcons />
                </View>
            </View>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);