import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{ props.headerText }</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 63,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
