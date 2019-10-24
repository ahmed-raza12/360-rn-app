import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default CommonButton = (props) => {
    return (
            <TouchableOpacity style={[styles.buttonContainer, styles.signupButton, props.style]} onPress={props.onPress}>
                <Text style={styles.signUpText}>{props.title}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 330,
        borderRadius: 30,
      },
      signupButton: {
        backgroundColor: "#7647C6",
      },
      signUpText: {
        color: 'white',
      },
})