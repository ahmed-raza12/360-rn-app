import React, { Component } from 'react';
import AutoResponsive from 'autoresponsive-react-native';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import postImg from "../images/post.png";

let styles = StyleSheet.create({
    container: {
        // backgroundColor: '#301711',
    },
    title: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    titleText: {
        color: '#d0bbab',
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        color: 'rgb(58, 45, 91)',
    },
    cardContent: {
        //overlay efect
        flex: 1,
        height: 20,
        width: 40,
        position: 'absolute',
        zIndex: 100,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        opacity: 0.6,
        borderTopRightRadius: 5,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // paddingTop: 15,
        // marginBottom: 4,
        paddingVertical: 7.5,
        paddingHorizontal: 5
    },
});

const SCREEN_WIDTH = Dimensions.get('window').width;

class Hoodie extends Component {
    state = {
        data: [
            { id: 1, name: "Elsa First", time: "1 days a go", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 2, name: "Elsa James", time: "2 minutes a go", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 3, name: "Elsa James", time: "3 hour a go", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 4, name: "Elsa James", time: "4 months a go", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 5, name: "Elsa James", time: "5 weeks a go", image: "https://lorempixel.com/400/200/sports/1/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 6, name: "Elsa James", time: "6 year a go", image: "https://lorempixel.com/400/200/nature/8/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 9, name: "Elsa James", time: "9 minutes a go", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colorful-of-dahlia-pink-flower-in-beautiful-garden-royalty-free-image-825886130-1554743243.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=640:*", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 1, name: "Elsa First", time: "1 days a go", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 2, name: "Elsa James", time: "2 minutes a go", image: "https://lorempixel.com/400/200/nature/5/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 3, name: "Elsa James", time: "3 hour a go", image: "https://lorempixel.com/400/200/nature/4/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 4, name: "Elsa James", time: "4 months a go", image: "https://lorempixel.com/400/200/nature/6/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 5, name: "Elsa James", time: "5 weeks a go", image: "https://lorempixel.com/400/200/sports/1/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            { id: 6, name: "Elsa James", time: "6 year a go", image: "https://lorempixel.com/400/200/nature/8/", profilePic: "https://lorempixel.com/400/200/nature/6/" },
            
        ]
    }

    getChildrenStyle() {
        return {
            width: (SCREEN_WIDTH - 27) / 3,
            height: parseInt(Math.random() * 20 + 12) * 6,
            // backgroundColor: 'rgb(92, 67, 155)',
            // paddingTop: 20,
            borderRadius: 8,
            marginLeft: 5
        };
    }

    getAutoResponsiveProps() {
        return {
            itemMargin: 5,
        };
    }

    renderChildren() {
        // return (
        // <FlatList style={styles.list}
        //     data={this.state.data}
        //     keyExtractor={(item) => {
        //         return item.id;
        //     }}
        //     ItemSeparatorComponent={() => {
        //         return (
        //             <View style={styles.separator} />
        //         )
        //     }}
        //     renderItem={(post) => {
        //         const item = post.item;
        //         return (
        //             <Image style={{width: 100}} source={{ uri: item.image }} />
        //         )
        //     }} />)  
        return this.state.data.map((i, key) => {
            console.log(i.image, 'opp')
            return (
                <View style={this.getChildrenStyle()} key={key}>
                    <Image source={postImg} style={{ width: '100%', height: '100%', borderRadius: 5 }} />
                    <View style={styles.cardContent}>
                        <View style={styles.cardFooter}>
                            <TouchableOpacity style={styles.socialBarButton}>
                                <AntDesign name="hearto" color="red" size={12} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }, this);
    }

    onPressTitle = () => {
        this.setState({
            array: [...this.state.array, parseInt(Math.random() * 30)],
        });
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <AutoResponsive {...this.getAutoResponsiveProps()}>
                    {this.renderChildren()}
                </AutoResponsive>
            </ScrollView>
        );
    }
}

module.exports = Hoodie;