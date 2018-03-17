import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardItem } from './common';

class ListItem extends Component {
    render() {
        const { name } = this.props.employee;
        return (
            <CardItem>
                <Text style={styles.textStyle}>
                    {name}
                </Text>
            </CardItem>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;
