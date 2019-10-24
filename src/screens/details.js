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
    TouchableHighlight,
} from 'react-native';
import { Thumbnail, Icon, Badge, Button } from "native-base";
import ProductComponent from "../component/product-component";
import FooterBtn from "../component/footerBtn";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import TopHeader from "../images/top-header.png";
import postImg from "../images/post.png";


export default class DetailsScreen extends Component {
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
            <View>
                <ScrollView contentContainerStyle={{ paddingBottom: '15%' }}>
                    <View style={styles.container}>
                        <FlatList style={styles.list}
                            horizontal={true}
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
                                    <View style={{ height: 250, marginHorizontal: 5, marginVertical: 5 }}>
                                        <Image source={postImg} style={{ width: 160, height: 240, borderRadius: 10 }} />
                                    </View>
                                )
                            }} />

                        <View style={{ marginVertical: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon name='heart-empty' style={{ fontSize: 16, marginHorizontal: 10 }} onPress={() => this.props.navigation.navigate("Likes")} />
                                <View style={{ height: 2, width: 80, backgroundColor: '#eee', marginHorizontal: 10 }}><View style={{backgroundColor: 'purple', height: 2, width: 20}}></View></View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.txtHeading}>Tolliver</Text>
                                <Text style={{fontSize: 12, color: 'gray', marginHorizontal: 15}}>RP 169.00</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.description}>Hoodie with Zipper</Text>
                                <Text style={styles.mblTxt}>RP 169.00</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.txtHeading}>Details</Text>
                            <Text style={styles.description}>To find common help documents please take a look in FAQ. incase you have specific question hit ask button.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                            <Text style={{width: '50%', marginLeft: 20}}>Color</Text>
                            <Text style={{width: '50%'}}>Size</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between' }}>
                            <View style={styles.contentColors}>
                                <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#00BFFF" }]}></TouchableOpacity>
                                <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#FF4500" }]}></TouchableOpacity>
                            </View>
                            <View style={styles.contentSize}>
                                <TouchableOpacity style={styles.btnSize}><Text>S</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnSize}><Text>M</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnSize}><Text>L</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnSize}><Text>XL</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <MaterialCommunityIcons name="arrow-left" size={26} style={styles.arrowIcon} onPress={this.props.onPrev} />
                    <View style={{ flexDirection: 'row', marginLeft: -40 }}>
                        <Icon name="shoppingcart" type="AntDesign" style={styles.cartIcon} />
                        <Badge style={{ height: 14, marginLeft: -45, marginTop: 10 }}><Text style={{fontSize: 8, color: '#fff'}}>5</Text></Badge>
                    </View>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate("SwiperComponent")}>
                        <Text style={styles.buttonText}>Add to cart</Text>
                    </TouchableHighlight>
                </View>
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
        height: 260
    },
    separator: {
        marginTop: 1,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
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
        backgroundColor: '#D2E1E5',
        color: 'black',
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 180,
        alignSelf: 'center',
        marginVertical: 25,
        marginHorizontal: 20,
    },
    cartIcon: {
        backgroundColor: '#D2E1E5',
        color: 'black',
        padding: 8,
        width: 50,
        height: 50,
        borderRadius: 180,
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 25,
        marginHorizontal: 20,
        fontSize: 26
    },
    description: {
        marginTop: 3,
        color: "gray",
        fontSize: 12,
        marginHorizontal: 4,
        marginVertical: 1,
        padding: 5,
        backgroundColor: '#fff'
    },
    txtHeading: {
        color: 'black',
        fontSize: 14,
        marginHorizontal: 10
    },
    mblTxt: {
        fontWeight: '200',
        color: 'purple',
        fontSize: 16,
        marginHorizontal: 15
    },
    contentColors: {
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        flexDirection: 'row',
        marginTop: 20
    },
    contentSize: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 20
    },
    btnColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3
    },
    btnSize: {
        height: 30,
        width: 30,
        borderRadius: 40,
        borderColor: '#778899',
        borderWidth: 1,
        marginHorizontal: 3,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        padding: 5,
        marginTop: 200,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 10,
        width: '55%',
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#7647C6",
        color: '#fff'
    },
});
