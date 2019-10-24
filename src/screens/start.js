import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    TouchableOpacity,
    View,
    Image,
    Text,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import FaqList from "../component/faq-list";
import StartSplash from "../images/splash.png";
import OnBoardContainer from "./onboard-container";

export default class GetStart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            component: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('5 sec')
            this.props.navigation.navigate('OnBoardContainer');
        }, 50000)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.startImg} source={StartSplash} />
                    <View style={styles.footer}>
                        <TouchableOpacity style={[styles.buttonContainer, styles.startBtn]} onPress={() => {
                            this.props.navigation.navigate("Register")
                        }}>
                            <Text style={styles.buttonText}>Getting Started</Text>
                        </TouchableOpacity>
                        <Text style={{ marginTop: 15 }}>Already have account?</Text>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("Login")
                        }}>
                            <Text style={styles.txtStyle}>Login here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        // width: '100%',
        // marginTop: 
    },
    startImg: {
        marginTop: 0,
        width: '100%',
    },
    footer: {
        flexDirection: 'column',
        // height: 60,
        backgroundColor: '#fff',
        marginTop: 30,
        padding: 5,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 160,
        borderRadius: 30,
        marginTop: -10
    },
    startBtn: {
        backgroundColor: "#7647C6",
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    txtStyle: {
        textDecorationLine: 'underline',
        color: "#7647C6",
        fontSize: 14,
        marginBottom: 5,
        textAlign: 'center',
    },
})