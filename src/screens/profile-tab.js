import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    ListView,
    TouchableOpacity,
    View,
    Image,
    Text,
    TouchableHighlight
} from 'react-native';
import TopHeader from "../images/top-header.png";
import postImg from "../images/post.png";

import { Container, Header, Content, Thumbnail, Tab, Tabs, Left, Body, Right, TabHeading } from 'native-base';

import ChangePassword from "./change-password";
import Profile from "./profile";
// import ShippingAddress from "./shipping-address";
import SellerProfile from "./seller-products";


export default class ProfileTabs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabnum: 2
        }
    }

    changeTab1 = () => {
        console.log('Go Tabs')
        this.refs.mytabs.goToPage(0)
    }

    changeTab2 = () => {
        console.log('Go Tabs')
        this.refs.mytabs.goToPage(1)
    }

    render() {
        return (
            <Container>
                <Image source={TopHeader} />
                <Thumbnail style={styles.thumbnailIcon} large source={postImg} />
                <Text style={{ marginLeft: 140, fontSize: 18, marginTop: 2 }}>Jackson Simmons</Text>
                <Tabs initialPage={0} page={this.state.tabnum} ref="mytabs" style={{ marginTop: 30 }} tabBarUnderlineStyle={{ backgroundColor: '#7647C6', width: 20, marginLeft: 30 }}>
                    <Tab
                        heading="PROFILE"
                        tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray', fontSize: 10, textAlign: 'left' }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6' }}
                        activeTextStyle={{ color: '#7647C6', fontSize: 10, textAlign: 'left' }}
                    >
                        <Profile />
                    </Tab>
                    <Tab
                        heading="PRODUCST"
                        tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray', fontSize: 10 }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6' }}
                        activeTextStyle={{ color: '#7647C6', fontSize: 10 }}
                    >
                        <SellerProfile properties={this.props} onPress={() => this.changeTab1()} showadd={true} />
                    </Tab>
                    <Tab
                        heading="CHANGE PASSWORD"
                        tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray', fontSize: 10 }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6' }}
                        activeTextStyle={{ color: '#7647C6', fontSize: 10 }}
                    >
                        <ChangePassword onPress={() => this.changeTab2()} />
                    </Tab>
                </Tabs>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
        // paddingTop: 10,
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
    icon: {
        // width: 100,
        height: 100,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 22,
        color: "#5F6D7A"
    },
    description: {
        marginTop: 20,
        textAlign: 'center',
        color: "black",
        fontSize: 14,
        marginHorizontal: 50,
        marginVertical: 30
    },
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        marginTop: 140,
        padding: 5,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#7647C6",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
    },
    inputIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        borderRadius: 180,
        marginHorizontal: 10
    },
    iconAlign: {
        flexDirection: 'row',
    },
    socialIcon: {
        // backgroundColor: 'lightgray',
        // color: 'gray',
        width: 40,
        height: 40,
        padding: 8,
        borderRadius: 200,
        marginHorizontal: 10
    }
});