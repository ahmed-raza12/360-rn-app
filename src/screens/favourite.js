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
import Feather from 'react-native-vector-icons/Feather';
import FavCard from "../component/fav-card";
import CustomHeader from "../component/header";

export default class Favourite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: "You", color: "#FF4500", members: 8, image: "https://img.icons8.com/color/70/000000/name.png" },
                { id: 1, title: "Home", color: "#87CEEB", members: 6, image: "https://img.icons8.com/office/70/000000/home-page.png" },
                { id: 2, title: "Love", color: "#4682B4", members: 12, image: "https://img.icons8.com/color/70/000000/two-hearts.png" },
                { id: 3, title: "Family", color: "#6A5ACD", members: 5, image: "https://img.icons8.com/color/70/000000/family.png" },
                { id: 4, title: "Friends", color: "#FF69B4", members: 6, image: "https://img.icons8.com/color/70/000000/groups.png" },
                { id: 5, title: "School", color: "#00BFFF", members: 7, image: "https://img.icons8.com/color/70/000000/classroom.png" },
                { id: 6, title: "Things", color: "#00FFFF", members: 8, image: "https://img.icons8.com/dusk/70/000000/checklist.png" },
                { id: 8, title: "World", color: "#20B2AA", members: 23, image: "https://img.icons8.com/dusk/70/000000/globe-earth.png" },
                { id: 9, title: "Remember", color: "#191970", members: 45, image: "https://img.icons8.com/color/70/000000/to-do.png" },
                { id: 9, title: "Game", color: "#008080", members: 13, image: "https://img.icons8.com/color/70/000000/basketball.png" },
            ]
        };
    }
    static navigationOptions = {
        title: 'FORGOT PASSWORD',
        headerTintColor: 'black',
        headerTitleStyle: {
            fontSize: 14,
            marginLeft: -5
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <CustomHeader headerStyle={{ backgroundColor: '#fff' }}
                    iconLeft={<Feather name="menu" size={22} />} 
                    iconRight={<Feather name="search" size={22} />}
                    onPressLeft={() => this.props.navigation.openDrawer()} />
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={(post) => {
                        const item = post.item;
                        return (
                            <FavCard title={item.title} members={item.members}
                                image={item.image}
                                id={item.id} />
                        )
                    }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    }
});
