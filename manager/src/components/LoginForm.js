import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem, Input, Button } from './common';

class LoginForm extends Component {
    render() {
        return (
            <Card >
                <CardItem>
                    <Input 
                        label='Email'
                        placeholder='email@gmail.com'
                    />
                </CardItem>

                <CardItem>
                    <Input
                        secureTextEntry 
                        label='Password'
                        placeholder='password'
                    />
                </CardItem>
                <CardItem>
                    <Button>
                        Login
                    </Button>
                </CardItem>
            </Card>
        );
    }
};

// const styles = {
//     buttonStyle: {
//         flex: 1,
//         alignSelf: 'stretch',
//         backgroundColor: '#fdfead',
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: '#007aff',
//         marginLeft: 5,
//         marginRight: 5
//     },
// };

export default LoginForm;
