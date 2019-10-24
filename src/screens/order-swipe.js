import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShippingCart from "./shipping-cart";
import Congratulation from "./order-finish";
import ShippingInfo from "./shipping-info";
import ChoosePayment from "./choose-payment";
import { StackActions } from "react-navigation";
import Swiper from 'react-native-swiper'
import ChangePassword from './change-password';
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
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
})

export default class SwiperComponent extends Component {
    // <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
    //                 <Text style={styles.buttonText}>Continue Shopping</Text>
    //             </TouchableHighlight>
    render() {
        return (
            <Swiper style={styles.wrapper} scrollEnabled={true} autoplay={false} showsButtons={false} ref="swiper"
                dot={<View style={{ backgroundColor: '#eee', width: '25%', height: 2, borderRadius: 2 }} />}
                activeDot={<View style={{ backgroundColor: '#7647C6', width: '25%', height: 2, borderRadius: 2 }} />}
                paginationStyle={{
                    bottom: 70
                }}
                loop={false}>
                <ShippingCart onNext={() => this.refs.swiper.scrollBy(1)} onPrev={() => this.props.navigation.navigate("BottomTabNavigator")} />
                <ShippingInfo onNext={() => this.refs.swiper.scrollBy(1)} onPrev={() => this.refs.swiper.scrollBy(-1)} />
                <ChoosePayment onNext={() => this.refs.swiper.scrollBy(1)} onPrev={() => this.refs.swiper.scrollBy(-1)} />
                <Congratulation onNext={() => {
                    if(this.props.navigation.state.routeName === 'Cart'){
                        this.props.navigation.goBack();
                        this.refs.swiper.scrollBy(-3)
                    } else if(this.props.navigation.state.routeName === 'SwiperComponent'){
                        this.props.navigation.navigate("BottomTabNavigator")
                    }
                 }} onPrev={() => this.refs.swiper.scrollBy(-1)} />
            </Swiper>
        )
    }
}