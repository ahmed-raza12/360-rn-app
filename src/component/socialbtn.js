import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default SocialBtn = (props) => {
    return (
            <TouchableOpacity style={[styles.buttonContainer, props.bgColor]}>
                    <Text style={styles.loginText}>{props.title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        width: '45%',
        borderRadius: 30,
        marginLeft: 10
    },
    loginText: {
        color: 'white',
    },
})