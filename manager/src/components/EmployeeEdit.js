import _ from 'lodash';
import React, { Component } from 'react';
import { Modal } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardItem, Button } from './common';
import { employeeUpdate, employeeSave } from '../actions'; 
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }
    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your Upcoming Shift is On ${shift}`);
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardItem>
                <CardItem>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Fire
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

const MapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(MapStateToProps, { 
    employeeUpdate, 
    employeeSave 
})(EmployeeEdit);
