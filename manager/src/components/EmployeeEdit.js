import _ from 'lodash';
import React, { Component } from 'react';
import { Modal } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardItem, Buttonm Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'; 
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = { showModal: false }

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
    onAccept() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid })
    }
    onDecline() {
        this.setState({ showModal: flase})
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
                    <Button onPress={this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardItem>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are You Sure You Want To Delete This?
                </Confirm>
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
    employeeSave,
    employeeDelete 
})(EmployeeEdit);
