import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    Picker,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon, Text } from 'native-base';
import InputField from '../component/input';
import SocialBtn from '../component/socialbtn';
import DeliveryBox from "../component/delivery-box";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonButton from "../component/button";
// import { connect } from 'react-redux';
// import { signup } from '../store/action/action';

const HEADER_MAX_HEIGHT = 200;// set the initial height
const HEADER_MIN_HEIGHT = 60;// set the height on scroll
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class CheckOutCredit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            addressLine: '',
            country: '',
            state: '',
            city: '',
            scrollY: new Animated.Value(0),
        }
    }
    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            // backgroundColor: '#f4511e',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
            fontSize: 14,
        },
    };
    submitForm = () => {
        // const { fullName } = this.state
        // if (fullName === '') {
        //     alert('all fields are required')
        // } else {
        //     let user = {
        //         fullName,
        //         addressLine,
        //         country,
        //         state,

        //     }
        //     console.log(fullName, email, password, 'signup')
        //     //   this.props.signupFunc(user)
        // }

    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{
                            nativeEvent:
                                { contentOffset: { y: this.state.scrollY } }
                        }]
                    )}>
                    <View style={styles.viewStyle}>
                        <InputField
                            width={{ width: 330 }}
                            title="Name on card"
                            placeholder="name"
                            onChangeText={(fullName) => this.setState({ fullName })}
                        />
                        <InputField
                            width={{ width: 330 }}
                            title="Card number"
                            placeholder="card number"
                            onChangeText={(fullName) => this.setState({ fullName })}
                        />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                            <InputField
                                txt={{ marginHorizontal: 12 }}
                                width={{ width: 155 }}
                                placeholder="10/20"
                                title="Expired date"
                                onChangeText={(fullName) => this.setState({ fullName })}
                            />
                            <InputField
                                txt={{ marginHorizontal: 20 }}
                                width={{ width: 155, marginHorizontal: 10 }}
                                title="CVC"
                                placeholder="..."
                                password={true}
                                keyboardType={'numeric'}
                                onChangeText={(fullName) => this.setState({ fullName })}
                            />
                        </View>
                        <CommonButton
                            style={{ marginVertical: 10 }}
                            title="Process Payment"
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView >
        );
    }
}

export default CheckOutCredit



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txtStyle: {
        textDecorationLine: 'underline',
        color: "#7647C6",
        fontSize: 14,
        marginBottom: 20
    },
    viewStyle: {
        marginTop: 15,
        alignItems: 'center',
        textAlign: 'left'
    },
    textStyl: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginHorizontal: 40,
        alignSelf: 'stretch',
        marginVertical: 5,
        color: 'blue'
    },
    containerbtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    facebookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    }
});