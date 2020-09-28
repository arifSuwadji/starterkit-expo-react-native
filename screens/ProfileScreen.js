import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tampilan Profile!</Text>
            <Text>Update Profile!</Text>
            <Text>Logout!</Text>
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
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);