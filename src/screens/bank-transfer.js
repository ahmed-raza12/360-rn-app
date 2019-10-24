import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';
import postImg from "../images/post.png";
import Cart from "../component/cart";
import BankTransferBox from "../component/bank-transfer-box";


export default class BankTransfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 12345678910, name: "Delivered", time: "1 days" },
                { id: 12345678910, name: "Delivered", time: "2 minutes"},
                { id: 12345678910, name: "Paid", time: "3 hour"},
                { id: 12345678910, name: "Delivered", time: "2 minutes"},
                { id: 12345678910, name: "Paid", time: "3 hour"}
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
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
                            <View style={styles.row}>
                                <Image source={postImg} style={styles.pic} />
                                <View>
                                    <View style={styles.nameContainer}>
                                        <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.id}</Text>
                                        <Text style={styles.mblTxt}>copy</Text>
                                    </View>
                                    <View style={styles.msgContainer}>
                                        <Text style={styles.msgTxt}>Edna Alvarenz</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        backgroundColor: "#E6E6E6",
    },
    separator: {
        marginTop: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
    },
    pic: {
        borderRadius: 5,
        width: 60,
        height: 50,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 16,
        width: 170,
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
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
    },
});
