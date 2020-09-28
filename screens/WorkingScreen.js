import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

function WorkingScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Working Screen!</Text>
        </View>
    );
}

WorkingScreen.navigationOptions = {
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkingScreen);