import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default FooterBtn = (props) => {
    return (
        <View style={[styles.footer, props.style]}>
            <MaterialCommunityIcons name="arrow-left" size={32} style={styles.inputIcon} onPress={props.onPrev} />
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={props.onNext}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        height: 60,
        // backgroundColor: '#eee',
        marginTop: 20,
        padding: 5,
        width: '100%'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '80%',
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#7647C6",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
    },
    inputIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        borderRadius: 180,
        marginHorizontal: 10
    },
})