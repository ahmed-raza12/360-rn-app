import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import exploreImg from "../images/explore.png";
import CommonButton from "../component/button";

export default class OnBoardExplore extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imgStyle} source={exploreImg} />
                <Text style={styles.description}>Find suitable product for your fashion style easily by swipe and scroll </Text>
                <TouchableOpacity onPress={this.props.onNext}>
                    <Text style={{ textDecorationLine: 'underline', color: 'pink', textAlign: 'right', marginHorizontal: 30, marginVertical: 30, fontSize: 16 }}>Skip</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'flex-start'
    },
    description: {
        marginTop: 0,
        textAlign: 'center',
        color: "gray",
        marginHorizontal: 50,
        marginVertical: 30
    },
    buttonContainer: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 350,
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: "#7647C6",
    },
    signUpText: {
        color: 'white',
    },
    imgStyle: {
        // alignSelf: 'center',
        // width: 300,
        height: 380,
        borderColor: 'gray'
        // marginVertical: 80,
        // marginHorizontal: 80
    }
})