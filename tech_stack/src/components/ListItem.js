import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TouchableWithoutFeedback,
    LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardItem } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }
    
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardItem>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardItem>
            );
        }
    }
    
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;
        
        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardItem>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardItem>
                    {this.renderDescription()} 
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
