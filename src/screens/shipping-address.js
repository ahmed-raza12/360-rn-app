import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
    KeyboardAvoidingView,
    ScrollView,
    Picker,
    ActivityIndicator,
    TouchableOpacity,
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon } from 'native-base';
import InputField from '../component/input';
import SocialBtn from '../component/socialbtn';
import CommonButton from "../component/button";
import FooterBtn from "../component/footerBtn";


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import { connect } from 'react-redux';
// import { signup } from '../store/action/action';


class ShippingAddress extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            birthday: null,
            password: ''
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
    componentDidMount() {
        // console.log(this.props.isLogin, 'did')
    }
    //   componentWillReceiveProps(nextProps){
    //     console.log(nextProps.isLogin, 'next')
    //   }
    submitForm = () => {
        const { fullName, email } = this.state
        if (fullName === '') {
            alert('all fields are required')
        } else {
            let user = {
                fullName,
                email,
            }
            console.log(fullName, email, 'signup')
            //   this.props.signupFunc(user)
        }

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <View style={styles.viewStyle}>
                        <InputField
                            width={{ width: 330 }}
                            placeholder="Pick your username"
                            title="Username"
                            onChangeText={(fullName) => this.setState({ fullName })}
                        />
                        <InputField
                            width={{ width: 330 }}
                            placeholder="Pick your username"
                            title="Username"
                            onChangeText={(fullName) => this.setState({ fullName })}
                        />
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                            <InputField
                                txt={{ marginHorizontal: 12 }}
                                width={{ width: 155 }}
                                placeholder="Email or Phone No"
                                keyboardType={"email-address"}
                                title="Email or Phone"
                                onChangeText={(email) => this.setState({ email })}
                            />
                            <InputField
                                txt={{ marginHorizontal: 20 }}
                                width={{ width: 160, marginHorizontal: 10 }}
                                title="Number"
                                placeholder="Number"
                                onChangeText={(password) => this.setState({ password })}
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flex: 1 }}>
                            <InputField
                                txt={{ marginHorizontal: 12 }}
                                width={{ width: 155 }}
                                placeholder="Email or Phone No"
                                keyboardType={"email-address"}
                                title="Email or Phone"
                                onChangeText={(email) => this.setState({ email })}
                            />
                            <InputField
                                txt={{ marginHorizontal: 20 }}
                                width={{ width: 160, marginHorizontal: 10 }}
                                placeholder="Email or Phone No"
                                keyboardType={"email-address"}
                                title="Email or Phone"
                                onChangeText={(email) => this.setState({ email })}
                            />
                        </View>
                        <FooterBtn
                            title="Update Profile"
                            onPress={this.props.onPress}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default ShippingAddress



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
});