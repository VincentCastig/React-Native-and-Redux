import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log('props', this.props);
        return;
    }
}

const mapStateToProps = state => {
//take properties off state object and provide them as props to our component
    return { Libraries: state.Libraries };
};

export default connect(mapStateToProps)(LibraryList);
