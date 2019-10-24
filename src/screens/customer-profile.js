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
    Button,
    TouchableHighlight,
} from 'react-native';
import { Thumbnail } from "native-base";
import ProductComponent from "../component/product-component";
import FooterBtn from "../component/footerBtn";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import TopHeader from "../images/top-header.png";
import postImg from "../images/post.png";


export default class CustomerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: "Delivered", time: "1 days", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: "Delivered", time: "2 minutes", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 3, name: "Paid", time: "3 hour", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 1, name: "Delivered", time: "1 days", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: "Delivered", time: "2 minutes", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 3, name: "Paid", time: "3 hour", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" }
            ]
        };
    }
    static navigationOptiops = {
        headerTitle: 'Shopping Cart'
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 10 }}>
                    <Image source={TopHeader} />
                    <Thumbnail style={styles.thumbnailIcon} large source={postImg} />
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Text style={{ width: '30%', alignSelf: 'center', fontSize: 18, marginTop: 2 }}>Jackson Simmons</Text>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-end', alignSelf: 'flex-end', width: '30%' }}>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, alignSelf: 'flex-start' }}>
                                <Feather name="user-plus" size={22} color="gray" />
                                <Text style={{ marginVertical: 5, color: 'gray', fontSize: 10, marginHorizontal: 5 }}>FOLLOW</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginHorizontal: 5, alignSelf: 'flex-start' }}>
                                <FontAwesome name="comments-o" size={22} color="gray" />
                                <Text style={{ marginVertical: 5, color: 'gray', fontSize: 10, marginHorizontal: 5 }}>CHAT</Text>
                            </View>
                        </View>
                    </View>

                </View>
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
                                <ProductComponent style={{ marginTop: -30 }} name={item.name} time={item.time}
                                    image={item.image} profilePic={item.profilePic}
                                    likes={item.id} />
                            </View>
                        )
                    }} />
                <TouchableHighlight style={{
                    bottom: 0,
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={this.props.onPress}>
                    <MaterialCommunityIcons name="arrow-left" size={28} style={styles.arrowIcon} />
                </TouchableHighlight>
                {this.props.showadd ?
                    <TouchableHighlight style={{
                        right: 0,
                        bottom: 0,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => this.props.navigation.navigate("AddProduct")}>
                        <Feather name="plus" size={28} style={styles.addIcon} />
                    </TouchableHighlight> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        // backgroundColor: "#E6E6E6",
    },
    separator: {
        marginTop: 1,
    },
    thumbnailIcon: {
        //overlay efect
        flex: 1,
        height: 110,
        width: 110,
        position: 'absolute',
        zIndex: 100,
        left: 15,
        right: 0,
        top: 30,
        bottom: 10,
        backgroundColor: '#fff',
        // opacity: 0.6,
        borderRadius: 70
    },
    arrowIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 180,
        alignSelf: 'center',
        marginVertical: 25,
        marginHorizontal: 20,
    },
    addIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 180,
        alignSelf: 'center',
        marginVertical: 25,
        marginHorizontal: 20,
    },

});
