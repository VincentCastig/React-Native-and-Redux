import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Albums</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 73
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
