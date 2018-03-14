import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged } from '../actions'; 
import { Card, CardItem, Input, Button } from './common';


class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text)
    }

    render() {
        return (
            <Card >
                <CardItem>
                    <Input 
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
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
const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm);
