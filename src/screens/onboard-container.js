import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OnBoardDelivery from "./onboard-dilevery";
import OnBoardExplore from "./onboard-explore";
import OnBoardPayment from "./onboard-payment";

import Swiper from 'react-native-swiper'
import { Button } from 'native-base';
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

export default class OnBoardContainer extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper} autoplay={false} showsButtons={false} ref="swiper"
                dot={<View style={{ backgroundColor: 'lightgray', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, }} />}
                activeDot={<View style={{backgroundColor: 'gray', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                paginationStyle={{
                    bottom: 70
                }}
                loop={false}>
                <OnBoardExplore onNext={() => this.refs.swiper.scrollBy(1)} />
                <OnBoardPayment onNext={() => this.refs.swiper.scrollBy(1)} onPrev={() => this.refs.swiper.scrollBy(-1)} />
                <OnBoardDelivery onNext={() => this.props.navigation.navigate("GetStart")} onPrev={() => this.refs.swiper.scrollBy(-1)} />
            </Swiper>
        )
    }
}