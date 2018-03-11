import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumList = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
    return (
        <Card>
            <CardItem>
                <View style={styles.thumbnailContainerStyle}>
                    <Image style={styles.thumbnailStyle}source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            {/* <CardItem>
                <Text>{props.album.title}</Text>
            </CardItem>
            <CardItem>
                <Text>{props.album.title}</Text>
            </CardItem> */}
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        width: 50, 
        height: 50
    }
};

export default AlbumList;