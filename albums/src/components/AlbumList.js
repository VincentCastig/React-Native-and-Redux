import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({ albums: response.data });
        });
    }
    renderAlbumList() {
        return this.state.albums.map((album) => {
            return (
                <AlbumDetail key={album.title} album={album} />
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