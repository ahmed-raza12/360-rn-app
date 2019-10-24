import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableHighlight, Dimensions, FlatList } from 'react-native';
import { Container } from "native-base";
import Cart from "../component/cart";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AntDesign from 'react-native-vector-icons/AntDesign';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class TransactionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: "Delivered", time: "1 days", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: "Delivered", time: "2 minutes", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 3, name: "Paid", time: "3 hour", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 1, name: "Delivered", time: "1 days", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: "Delivered", time: "2 minutes", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 3, name: "Paid", time: "3 hour", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 1, name: "Delivered", time: "1 days", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: "Delivered", time: "2 minutes", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 3, name: "Paid", time: "3 hour", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" }
            ]
        };
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={styles.order}>
                            <Text style={{ textAlign: 'center', textAlignVertical: 'center' }}>Total</Text>
                            <Text style={{ fontSize: 16, color: '#7647C6', textAlign: 'center', textAlignVertical: 'center' }}>PR 538.000</Text>
                        </View>
                        <View style={styles.order}>
                            <Text style={{ textAlign: 'center' }}>Status</Text>
                            <Text style={{ fontSize: 16, textAlign: 'center' }}>Waiting payment</Text>
                        </View>
                        <View style={styles.order}>
                            <Text style={{ textAlign: 'center' }}>Payment</Text>
                            <Text style={{ fontSize: 16, textAlign: 'center' }}>Bank Transfer</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.txtHeading}>Shipping Address</Text>
                        <Text style={styles.description}>To find common help documents please take a look in FAQ. incase you have specific question hit ask button.</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.txtHeading}>Tracking Code</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.description}>123457862783682</Text>
                            <Text style={styles.mblTxt}>copy</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList style={styles.list}
                            data={this.state.data}
                            keyExtractor={(item) => {
                                return item.id;
                            }}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={styles.separator} />
                                )
                            }}
                            renderItem={(post) => {
                                const item = post.item;
                                return (
                                    <View>
                                        <Cart brand={true} name={item.name} time={item.time}
                                            image={item.image} profilePic={item.profilePic}
                                            likes={item.id} />
                                    </View>
                                )
                            }} />
                    </View>

                </ScrollView>
                <TouchableHighlight style={{
                    bottom: 0,
                    position: 'absolute'
                }}>
                    <MaterialCommunityIcons name="arrow-left" size={32} style={styles.inputIcon} />
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#EEEEEE',
        alignItems: 'center'
    },
    description: {
        marginTop: 3,
        color: "black",
        fontSize: 14,
        marginHorizontal: 4,
        marginVertical: 1,
        padding: 5,
        backgroundColor: '#fff'
    },
    order: {
        width: (SCREEN_WIDTH) / 3,
        height: 100,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#eee'
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
    txtHeading: {
        color: 'gray',
        fontSize: 12,
        marginHorizontal: 10
    },
    inputIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 180,
        marginHorizontal: 10,
        alignSelf: 'flex-start',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
        backgroundColor: '#eff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginHorizontal: 10
    },
})