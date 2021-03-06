import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardItem } from './CardItem';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent="true"
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardItem style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
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
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0,75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export default Confirm