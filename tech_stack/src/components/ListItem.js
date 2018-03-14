import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardItem } from './common';

class ListItem extends Component {
    render() {
        return (
            <CardItem>
                <Text>{this.props.library.title}</Text>
            </CardItem> 
        );
    }
}

export default ListItem;
