import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    return (
        <Modal
            visible={visible}
            transparent="true"
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View>
                <CardItem>
                    <Text>{children}</Text>
                </CardItem>
                <CardItem>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardItem>
            </View>
        </Modal>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default Confirm