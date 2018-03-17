import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardItem } from './common';

class ListItem extends Component {
    onRowPress() {
        console.log('pressed');
        Actions.employeeCreate({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;
        return (
            <TouchableHighlight onPress={this.onRowPress.bind(this)}>
                <CardItem>
                    <Text style={styles.textStyle}>
                        {name}
                    </Text>
                </CardItem>
            </TouchableHighlight>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
