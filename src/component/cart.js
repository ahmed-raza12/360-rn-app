import React, { Component } from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import postImg from "../images/post.png";
import AntDesign from 'react-native-vector-icons/AntDesign';



export default Cart = (props) => {
    return (
        <Card style={styles.card}>
            <CardItem style={{ height: 120 }}>
                <Left>
                    <Thumbnail style={{ borderRadius: 5, height: 100 }} square large source={postImg} />
                    <Body>
                        <Text style={{ marginTop: -5 }}>Brand</Text>
                       {props.brand  ? <Text style={{ fontSize: 12, width: 120 }} note>Hoodie with zipper</Text> : <Text style={{ fontSize: 14 }} note>RP 200.00</Text>}
                        <Text note></Text>
                        <View style={{flexDirection: 'row' }}>
                            <Text note>Color</Text>
                            <Text note>Size</Text>
                        </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text note>{props.likes}</Text>
                                <Text note>{props.likes}</Text>
                            </View>
                    </Body>
                </Left>
                <Right>
                  {props.showCross ? <AntDesign name="closecircle" style={{ marginTop: -5 }} size={20} color="gray" /> : <Text style={{ fontSize: 16, marginTop: -20 }} note>RP 200.00</Text>} 
                    <Text></Text>
                    <Text></Text>
                    {
                        props.showBtn ? <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', marginTop: 10}}>
                        <AntDesign name="minuscircle" size={18} color="lightgray" style={{marginHorizontal: 5}} />
                        <Text>1</Text>
                        <AntDesign name="pluscircleo" size={18} color="lightgray" style={{marginHorizontal: 5}} />
                    </View> : null
                    }
                    

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
        backgroundColor: "#DCDCDC",
        marginTop: 0
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