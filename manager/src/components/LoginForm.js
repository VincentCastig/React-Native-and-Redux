import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card style={styles.buttonStyle}>
                <Text>login</Text>
            </Card>
        );
    }
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fdfead',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
};

export default LoginForm;
