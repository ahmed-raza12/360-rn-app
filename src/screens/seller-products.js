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
    TouchableHighlight
} from 'react-native';
import { Header } from "native-base";
import ProductComponent from "../component/product-component";
import FooterBtn from "../component/footerBtn";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';


export default class SellerProfile extends Component {
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
                                <ProductComponent showbtn={true} name={item.name} time={item.time}
                                    image={item.image} profilePic={item.profilePic}
                                    likes={item.id} />
                            </View>
                        )
                    }} />
                <TouchableHighlight style={{
                    bottom: 0,
                    position: 'absolute',
                    justifyContent:'center',
                    alignItems: 'center'
                }} onPress={this.props.onPress}>
                    <MaterialCommunityIcons name="arrow-left" size={28} style={styles.arrowIcon} />
                </TouchableHighlight>
                <TouchableHighlight style={{
                    right: 0,
                    bottom: 0,
                    position: 'absolute',
                    justifyContent:'center',
                    alignItems: 'center'
                }} onPress={() => this.props.properties.navigation.navigate("AddProduct")}>
                    <Feather name="plus" size={28} style={styles.addIcon} />
                </TouchableHighlight>
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
