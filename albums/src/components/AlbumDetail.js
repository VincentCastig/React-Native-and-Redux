import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumList = (props) => {
    return (
        <Card>
            <Text>{props.album.title}</Text>
        </Card>
    );
};

export default AlbumList;