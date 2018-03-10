import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({ albums: response.data });
        });
    }
    renderAlbumList() {
        return this.state.albums.map((album, i) => {
            return (
                <Text key={i}>
                    {album.title}
                </Text>
            );
        });
    }
    
    render() {
        return (
            <View>
                {this.renderAlbumList()}
            </View>
        );
    }
}

export default AlbumList;