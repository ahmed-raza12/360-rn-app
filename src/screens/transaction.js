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
import Product from "../component/product";
import CustomHeader from "../component/header";
import Feather from 'react-native-vector-icons/Feather';


export default class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: "Delivered", time: "1 days", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: "Delivered", time: "2 minutes", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 3, name: "Paid", time: "3 hour", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: "Delivered", time: "2 minutes", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 3, name: "Paid", time: "3 hour", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" }
            ]
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomHeader headerStyle={{ backgroundColor: '#fff' }}
                    iconLeft={<Feather name="menu" size={22} />}
                    iconRight={<Feather name="search" size={22} />}
                    onPressLeft={() => this.props.navigation.openDrawer()} />
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
                                <Product name={item.name} time={item.time} 
                                image={item.image} profilePic={item.profilePic}
                                likes={item.id} />
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
        // backgroundColor: "#E6E6E6",
    },
    separator: {
        // marginTop: 1,
    },
    
});
