import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Container } from "native-base";
import FaqList from "../component/faq-list";

import AntDesign from 'react-native-vector-icons/AntDesign';


const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" }
];
export default class OrderDetails extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#eee' }}>
                <View>
                    <View>
                        <Text style={{ textAlign: 'center' }}>Total</Text>
                        <Text style={{ fontSize: 20, color: '#7647C6', textAlign: 'center' }}>PR 538.000</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center' }}>Status</Text>
                        <Text style={{ fontSize: 20, color: '#7647C6', textAlign: 'center' }}>PR 538.000</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center' }}>Payment</Text>
                        <Text style={{ fontSize: 20, color: '#7647C6', textAlign: 'center' }}>PR 538.000</Text>
                    </View>
                </View>
                <View>
                    <Text>Shipping Address</Text>
                    <Text style={styles.description}>To find common help documents please take a look in FAQ. incase you have specific question hit ask button.</Text>
                </View>
                <View>
                    <Text>Tracking Code</Text>
                    <Text style={styles.description}>123457862783682</Text>
                    <Text style={styles.mblTxt}>copy</Text>
                </View>
                <FaqList data={dataArray} />
                <TouchableHighlight>
                    <AntDesign name="question" style={styles.questionIcon} size={30} />
                </TouchableHighlight>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },
    description: {
        marginTop: 20,
        textAlign: 'center',
        color: "black",
        fontSize: 14,
        marginHorizontal: 6,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#fff'
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
    questionIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 180,
        marginHorizontal: 10,
        alignSelf: 'flex-end',
        marginVertical: 20,
        marginHorizontal: 20
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
        backgroundColor: '#eff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
})