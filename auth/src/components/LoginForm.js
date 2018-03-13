import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardItem, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSucces.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSucces.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail(){
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
     }

    onLoginSucces(){
       this.setState({
           email: '',
           password: '',
           loading: ''
       });
    }
    renderButton() {
        if (this.state.loading){
            return <Spinner />;
        }
        return (
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
        )
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
                        secureTextEntry
                        placeholder="password"
                        label='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardItem>
                {this.state.Spinner && <Spinner />}
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardItem>
                    {this.renderButton()}
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
