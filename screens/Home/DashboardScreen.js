import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';

function DashboardScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Dashboard Area!</Text>
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