import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import postImg from "../images/post.png";
import AntDesign from 'react-native-vector-icons/AntDesign';



export default Product = (props) => {
    return (
        <Card style={styles.card}>
            <CardItem style={{ height: 110, marginVertical: 2 }}>
                <Left>
                    <Thumbnail style={{ borderRadius: 5, height: 80 }} square large source={postImg} />
                    <Body>
                        <Text style={{ marginTop: -12 }}>Brand</Text>
                        <Text style={{fontSize:12}} note>{props.time}</Text>
                        <Text note>{props.likes}</Text>
                    </Body>
                </Left>
                <Right>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                    <View style={props.name === 'Delivered' ? styles.indication1 : styles.indication2}></View>
                        <Text>
                        {props.name}</Text>
                    </View>
                    <Text></Text>
                    <Text style={{ marginTop: 10, color: 'gray' }}>RP 459.00</Text>
                </Right>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    /******** card **************/
    card: {
        margin: 0,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#DCDCDC",
        // backgroundColor: "#DCDCDC",
    },
    cardContent: {
        //overlay efect             
        flex: 1,
        height: 30,
        width: 60,
        position: 'absolute',
        zIndex: 100,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        opacity: 0.6,
        borderTopRightRadius: 5,
    },
    indication1: {
        backgroundColor: 'lightblue',
        width: 7, 
        height: 7, 
        borderRadius: 5,
        marginTop: 7, 
        marginHorizontal: 10
    },
    indication2: {
        backgroundColor: 'red',
        width: 7, 
        height: 7, 
        borderRadius: 7,
        marginTop: 5, 
        marginHorizontal: 10
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // paddingTop: 15,
        // marginBottom: 4,
        paddingVertical: 7.5,
        paddingHorizontal: 5
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },
});