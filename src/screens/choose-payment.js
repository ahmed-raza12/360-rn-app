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
import BankTransfer from "./bank-transfer";
import CheckOutCredit from "./checkout-credit";
import CustomHeader from "../component/header";
import ShippingAddress from "./shipping-address";
import FooterBtn from "../component/footerBtn"


export default class ChoosePayment extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <CustomHeader headerStyle={{ backgroundColor: '#fff', fontSize: 12 }} bodyText={"Choose Payment"} />
                <Text style={{ marginHorizontal: 40, fontSize: 18, marginTop: 2, textAlign: 'right' }}>Amount to pay for this order</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">RP 356.000</Text>
                    <Text style={styles.mblTxt}>copy</Text>
                </View>
                <Tabs style={{ marginTop: 30 }} tabBarUnderlineStyle={{ backgroundColor: '#7647C6', width: 20, marginLeft: 40 }}>
                    <Tab
                        heading="BANK TRANSFER"
                        tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray', fontSize: 10, textAlign: 'left' }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6' }}
                        activeTextStyle={{ color: '#7647C6', fontSize: 12, textAlign: 'left' }}
                    >
                        <BankTransfer />
                    </Tab>
                    <Tab
                        heading="CREDIT/DEBIT CARD"
                        tabStyle={{ backgroundColor: 'white' }} textStyle={{ color: 'gray', fontSize: 10, textAlign: 'left' }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6' }}
                        activeTextStyle={{ color: '#7647C6', fontSize: 12, textAlign: 'left' }}
                    >
                        <CheckOutCredit />
                    </Tab>
                </Tabs>
                <FooterBtn
                    title="Confirm"
                    onNext={this.props.onNext}
                    onPrev={this.props.onPrev}
                />
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
    nameTxt: {
        marginLeft: 2,
        fontWeight: '600',
        color: '#222',
        fontSize: 16,
    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
        backgroundColor: '#eff',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
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