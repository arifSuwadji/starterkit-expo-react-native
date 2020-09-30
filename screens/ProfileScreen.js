import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import pagesTypeAction from '../constants/reducers/pages/pagesTypeAction';
import userTypeAction from '../constants/reducers/user/userTypeAction';

function ProfileScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tampilan Profile!</Text>
            <Text>Update Profile!</Text>
            <TouchableOpacity style={{flexDirection:'row', padding:20, justifyContent:'space-around', alignItems:'center'}} onPress={() => { props.Logout(props) }}>
                <AntDesign name="logout" size={24} color="tomato" />
                <Text style={{fontSize:24, color:"tomato"}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

ProfileScreen.navigationOptions = {
    header: null,
};

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Logout: async (props) => {
            await dispatch({ type: pagesTypeAction.IS_LOADING, isLoading: true});
            await dispatch({ type: userTypeAction.IS_LOGED, isLoged: 0});
            props.navigation.navigate('Login');
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);