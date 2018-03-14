import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const { titleStyle } = styles;
        console.log('props', this.props);
        return (
            <CardItem>
                <TouchableOpacity>
                <Text style={titleStyle}>
                    {this.props.library.title}
                </Text>
                </TouchableOpacity>
            </CardItem> 
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

export default connect(null, actions)(ListItem);
