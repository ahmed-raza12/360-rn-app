import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Left, Body } from 'native-base';
import postImg from "../images/post.png";
import AntDesign from 'react-native-vector-icons/AntDesign';



export default FavCard = (props) => {
    return (
        <Card style={styles.card}>
            <CardItem cardBody>
                <Image source={postImg} style={{ height: 190, width: '100%', borderRadius: 2 }}  />
                <View style={styles.cardContent}>
                    <View style={styles.cardFooter}>
                                <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
                                    <AntDesign name="hearto" color="red" size={16} />
                                    <Text style={styles.socialBarlabel}>100</Text>
                                </TouchableOpacity>
                    </View>
                </View>
            </CardItem>
            <CardItem style={{ height: 70, marginHorizontal: 5 }}>
                <Left>
                    <Body>
                        <Text>Brand</Text>
                        <Text note>{props.title}</Text>
                        <Text note>{props.id}</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    /******** card **************/
    card: {
        marginHorizontal: 2,
        marginVertical: 2,
        flexBasis: '47%'
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
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // paddingTop: 15,
        marginBottom: 4,
        paddingVertical: 7.5,
        paddingHorizontal: 5
    },
    cardImage: {
        height: 150,
        width: 70,
        alignSelf: 'center'
    },
    title: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: 'bold'
    },
    socialBarlabel: {
        fontSize: 14,
        color: "black",
        textAlign: 'center',
        marginTop: -2,
        marginHorizontal: 2
    },
    icon: {
        height: 20,
        width: 20,
    }
});