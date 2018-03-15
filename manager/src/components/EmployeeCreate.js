import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardItem, Input, Button } from './common';


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        label='Name'
                        placeholder='Joe'
                        value={this.props.name}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardItem>

                <CardItem>
                    <Input 
                        label='Phone'
                        placeholder='555-555-5555'    
                        value={this.props.phone}
                        onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardItem>

                <CardItem>
                </CardItem>

                <CardItem>
                    <Button>
                        Create
                    </Button>
                </CardItem>
                
            </Card>
        );
    }
}
    const mapStateToProps = state => {
        const { name, phone, shift } = state.employeeForm;

        return { name, phone, shift };
    };

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
