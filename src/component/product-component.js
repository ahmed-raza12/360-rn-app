import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import postImg from "../images/post.png";
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default ProductComponent = (props) => {
    return (
        <Card style={styles.card}>
            <CardItem style={{ height: 90 }}>
                <Left>
                    <Thumbnail style={{ borderRadius: 5, height: 70 }} square large source={postImg} />
                    <Body>
                        <Text style={{ marginTop: -32 }}>Brand</Text>
                        <Text style={{ fontSize: 10, width: '100%' }} note>145345456714534</Text>
                    </Body>
                </Left>
                <Right>
                    <Text style={[{ fontSize: 16, marginTop: -22 }, props.style]} note>RP 200.00</Text>
                    {props.showbtn ? <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginVertical: 5 }}>
                        <FontAwesome name="edit" size={18} color="black" style={{ marginHorizontal: 3 }} />
                        <Entypo name="circle-with-cross" size={18} color="red" style={{ marginHorizontal: 3 }} />
                    </View> : null}
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
        // borderColor: "#DCDCDC",
        backgroundColor: "#DCDCDC",
        marginTop: 0
    },
});