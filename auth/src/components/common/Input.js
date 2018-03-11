import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{ label }</Text>
            <TextInput
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 10, 
        paddingLeft: 10, 
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: 20, 
        width: 100
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
