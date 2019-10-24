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
    ImageBackground
} from 'react-native';
import ListUi from "../component/list-ui";
import postImg from "../images/post.png";
import CustomHeader from "../component/header";
import backImg from "../images/about.png";
import Feather from 'react-native-vector-icons/Feather';


export default class Follows extends Component {

    constructor(props) {
        super(props);
        this.state = {
            followers: [
                { id: 1, name: "Mark Doe", status: "active", image: postImg },
                { id: 2, name: "Clark Man", status: "active", image: postImg },
                { id: 3, name: "Jaden Boor", status: "active", image: postImg },
                { id: 4, name: "Srick Tree", status: "active", image: postImg },
                { id: 5, name: "Erick Doe", status: "active", image: postImg },
                { id: 6, name: "Francis Doe", status: "active", image: postImg },
                { id: 8, name: "Matilde Doe", status: "active", image: postImg },
                { id: 9, name: "John Doe", status: "active", image: postImg },
                { id: 10, name: "Fermod Doe", status: "active", image: postImg },
                { id: 11, name: "Danny Doe", status: "active", image: postImg },
            ]
        };
    }


    render() {
        return (
                <ImageBackground source={backImg} style={{
                    flex: 1,
                    width: 360,
                    height: 600,
                    marginTop: -160
                }}>
                    <CustomHeader headerStyle={{ backgroundColor: 'transparent', marginTop: 160 }}
                        iconLeft={<Feather name="arrow-left" size={22} />}
                        iconRight={null}
                        bodyText={"FOLLOWERS"}
                        onPressLeft={() => this.props.navigation.goBack()} />

                    <FlatList
                        extraData={this.state}
                        data={this.state.followers}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={(post) => {
                            const item = post.item;
                            return (
                                <ListUi name={item.name} image={item.image} />
                            )
                        }
                        } />
                </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DCDCDC',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 10,
    },
    pic: {
        borderRadius: 30,
        width: 60,
        height: 60,
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 18,
        width: 170,
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    msgTxt: {
        fontWeight: '400',
        color: '#008B8B',
        fontSize: 12,
        marginLeft: 15,
    },
}); 