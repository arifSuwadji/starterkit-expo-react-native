import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import NextLoading from '../../components/NextLoading';

function DashboardScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Dashboard Area!</Text>
            <NextLoading />
            <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                <Text>Halaman Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

DashboardScreen.navigationOptions = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);