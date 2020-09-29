import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import NextLoading from '../../components/NextLoading';

function KebersihanScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Kebersihan Area!</Text>
            <NextLoading />
            <TouchableOpacity onPress={() => props.navigation.navigate('Inbox')}>
                <Text>Halaman Inbox</Text>
            </TouchableOpacity>
        </View>
    );
}

KebersihanScreen.navigationOptions = {
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

export default connect(mapStateToProps, mapDispatchToProps)(KebersihanScreen);