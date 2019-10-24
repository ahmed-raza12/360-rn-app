import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import postImg from "../images/post.png";
import AntDesign from 'react-native-vector-icons/AntDesign';



export default PostCard = (props) => {
    return (
        <Card style={styles.card}>
            <CardItem button onPress={props.onPress} style={{ marginHorizontal: 5 }} cardBody>
                <Image source={postImg} style={{ height: 100, width: 300 }, props.style} />
                <View style={styles.cardContent}>
                    <View style={styles.cardFooter}>
                        <TouchableOpacity style={styles.socialBarButton}>
                            <AntDesign name="hearto" color="red" size={16} />
                        </TouchableOpacity>
                        <Text style={{ marginTop: -4}}>50</Text>
                    </View>
                </View>
            </CardItem>
            <CardItem style={{ height: 70, marginHorizontal: 5 }}>
                <Left>
                    <Thumbnail style={{ width: 45, height: 45 }} source={postImg} />
                    <Body>
                        <Text>{props.name}</Text>
                        <Text note>{props.time}</Text>
                        <Text note>{props.likes}</Text>
                    </Body>
                </Left>
                <Right>
                    <Text>11h ago</Text>
                    <Text note>06 fab 2019</Text>
                    <Text>RP 459.00</Text>
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