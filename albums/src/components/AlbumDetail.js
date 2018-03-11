import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumList = (props) => {
    return (
        <Card>
            <CardItem>
                <View>
                    {/* <Text>{props.album.title}</Text> */}
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
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
    }
}

export default AlbumList;