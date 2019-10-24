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
    ListView,
    Dimensions
} from 'react-native';
import PostCard from "../component/postcard";

const window = Dimensions.get("window")

export default class Jacket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: "Elsa First", time: "1 days a go", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 2, name: "Elsa James", time: "2 minutes a go", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 3, name: "Elsa James", time: "3 hour a go", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 4, name: "Elsa James", time: "4 months a go", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 5, name: "Elsa James", time: "5 weeks a go", image: "https://lorempixel.com/400/200/sports/1/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 6, name: "Elsa James", time: "6 year a go", image: "https://lorempixel.com/400/200/nature/8/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 7, name: "Elsa James", time: "7 minutes a go", image: "https://lorempixel.com/400/200/nature/1/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 8, name: "Elsa James", time: "8 days a go", image: "https://lorempixel.com/400/200/nature/3/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
                { id: 9, name: "Elsa James", time: "9 minutes a go", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            ]
        };

        onPressImage = value => {
            console.warn(value);
        };
    }
    renderItem(post) {
        const item = post.item;
        console.log(item, post, 'opp')
        return (
            <TouchableOpacity>
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
                            <PostCard name={item.name} time={item.time}
                                image={item.image} profilePic={item.profilePic}
                                likes={item.id} />
                        )
                    }} />
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <FlatList style={styles.list}
                    // contentContainerStyle={styles.dood}
                    numColumns={3}
                    key={2}
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
                        if (item.id % 2 == 0) {
                            return <Image style={{ marginTop: 8 }} source={{ uri: item.image }} />
                        }
                        return <Image style={{ width: 200 }} source={{ uri: item.image }} />
                    }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex', 
        flexWrap: 'wrap'
    },
    dood: {
        flex: 25
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    list: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
});
