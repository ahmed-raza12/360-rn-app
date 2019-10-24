import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, Left, Thumbnail, Body } from 'react-native';
import postImg from "../images/post.png";


const data = [
    { id: 500.00, title: "You", color: "#FF4500", members: 8, image: "https://img.icons8.com/color/70/000000/name.png" },
    { id: 500.00, title: "Home", color: "#87CEEB", members: 6, image: "https://img.icons8.com/office/70/000000/home-page.png" },
    { id: 400.00, title: "Love", color: "#4682B4", members: 12, image: "https://img.icons8.com/color/70/000000/two-hearts.png" },
    { id: 40.00, title: "Game", color: "#008080", members: 13, image: "https://img.icons8.com/color/70/000000/basketball.png" },
]
export default BankTransferBox = (props) => {
    return (
        <View>
            <FlatList style={styles.list}
                // contentContainerStyle={styles.listContainer}
                data={data}
                horizontal={false}
                numColumns={2}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem={(post) => {
                    const item = post.item;
                    return (
                        <Text>BankTransferBox ..........</Text>
                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: 150,
        borderRadius: 5,
        marginHorizontal: 12,
        marginVertical: 8,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1
    },
    buttonContainer: {
        width: 60,
        height: 25,
        backgroundColor: "#7647C6",
        marginHorizontal: 10

    },
    styleText: {
        color: "gray",
    },
    signUpText: {
        color: 'white',
    },
})