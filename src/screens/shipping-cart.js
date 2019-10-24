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
import { Header } from "native-base";
import Cart from "../component/cart";
import CustomHeader from '../component/header';
import FooterBtn from "../component/footerBtn";


export default class ShippingCart extends Component {
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
                <CustomHeader headerStyle={{ backgroundColor: '#fff' }}
                        bodyText={"shipping Cart"}
                        onPressLeft={null} />
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
                                <Cart showCross={true} showBtn={true} name={item.name} time={item.time}
                                    image={item.image} profilePic={item.profilePic}
                                    likes={item.id} />
                            </View>
                        )
                    }} />
                <View style={{marginTop: 10}}>
                    <Text style={{textAlign: 'center'}}>Subtotal</Text>
                    <Text style={{ fontSize: 20, color: '#7647C6', textAlign: 'center' }}>PR 538.000</Text>
                </View>
                <FooterBtn
                    onNext={this.props.onNext}
                    onPrev={this.props.onPrev}
                    title="Place This Order"
                />
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

});
