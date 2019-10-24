import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Icon } from "native-base";

export default InputField = (props) => {
    return (
        <View>
            <Text style={[styles.textStyl, props.txt]}>
                {props.title}
            </Text>
            <View style={[styles.inputContainer, props.width]}>
                <TextInput style={styles.inputs}
                    value={props.value}
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType ? props.keyboardType : 'default'}
                    secureTextEntry={props.password ? true : false}
                    onChangeText={props.onChangeText}
                    multiline={props.multiline || false}
                    numberOfLines={props.numberOfLines}
                />
                {props.eye}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyl: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginHorizontal: 5,
        alignSelf: 'stretch',
        // marginVertical: 2,
        color: 'gray'
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        height: 50,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        // borderColor: 'green',
        flex: 1,
    },
    inputIcon: {
        color: 'gray',
        marginRight: 5,
        justifyContent: 'flex-end'
    },
})