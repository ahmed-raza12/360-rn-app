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
import PostCard from "../component/postcard";


export default class TShirt extends Component {
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
    }


    render() {
        console.log(this.props, 'popopp')
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
                            <PostCard onPress={() => this.props.properties.navigation.navigate("DetailsScreen")} style={{width: '100%'}} name={item.name} time={item.time}
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
    separator: {
        marginTop: 1,
    },

});
