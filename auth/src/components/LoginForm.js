import React, { Component } from 'react';
import { Card, CardItem, Button, Input } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: ''
    };

    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        placeholder="user@gmail.com"
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardItem>
                <CardItem>
                    <Input 
                        placeholder="password"
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardItem>
                <CardItem>
                    <Button>Log in</Button>
                </CardItem>
            </Card>
        );
    }
}




export default LoginForm;
