import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ListView,
    TouchableOpacity,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterBtn from "../component/footerBtn";

import TopHeader from "../images/top-header.png";
import FbIcon from "../images/face-icon.png";
import GoogleIcon from "../images/google-icon.png";
import InstalIcon from "../images/insta-icon.png";


export default class Congratulation extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.icon} source={TopHeader} />
                <Text style={styles.title}>Congratulation</Text>
                <Text style={styles.description}>
                    You order has processed. Estimated devilery time 3-6 days.
                </Text>
                <Text style={styles.description}>
                    Thank You for shopping
                    @360Degree
                    Don't forget to follow our social account
                </Text>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton, {width: '40%'}]} onPress={this.props.onNext}>
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableHighlight>
                <View style={styles.footer}>
                    <MaterialCommunityIcons name="arrow-left" size={32} style={styles.inputIcon} onPress={this.props.onPrev} />
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.props.onNext}>
                        <Text style={styles.buttonText}>Continue Shopping</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        // paddingTop: 10,
    },
    icon: {
        width: '100%',
        height: 100,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 22,
        color: "#5F6D7A"
    },
    description: {
        marginTop: 20,
        textAlign: 'center',
        color: "black",
        fontSize: 14,
        marginHorizontal: 50,
        marginVertical: 30
    },
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        marginTop: 140,
        padding: 5,
        position: 'absolute',
        bottom: 0,
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
    iconAlign: {
        flexDirection: 'row',
    },
    socialIcon: {
        // backgroundColor: 'lightgray',
        // color: 'gray',
        width: 40,
        height: 40,
        padding: 8,
        borderRadius: 200,
        marginHorizontal: 10
    }
});