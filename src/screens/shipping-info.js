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
    Image
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Icon, Text } from 'native-base';
import InputField from '../component/input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SocialBtn from '../component/socialbtn';
import DeliveryBox from "../component/delivery-box";
import CustomHeader from '../component/header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FooterBtn from "../component/footerBtn";
// import { connect } from 'react-redux';
// import { signup } from '../store/action/action';

const data = [
    { id: 500.00, mime: "ramr.png", color: "#FF4500", members: 8, path: "https://img.icons8.com/color/70/000000/name.png" },
    { id: 500.00, mime: "ramr.png", color: "#87CEEB", members: 6, path: "https://img.icons8.com/office/70/000000/home-page.png" },
    { id: 400.00, mime: "ramr.png", color: "#4682B4", members: 12, path: "https://img.icons8.com/color/70/000000/two-hearts.png" },
    { id: 40.00, mime: "ramr.png", color: "#008080", members: 13, path: "https://img.icons8.com/color/70/000000/basketball.png" },
]

class ShippingInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            addressLine: '',
            country: '',
            state: '',
            city: '',
            zip: '',
            delivery: '',
            subTotal: '',
            deliveryCost: '',
            total: ''
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
        console.log("shippinginfo")
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{}}>
                    <CustomHeader headerStyle={{ backgroundColor: '#fff' }}
                        bodyText={"shipping info"}
                        onPressLeft={null} />
                    <View style={styles.viewStyle}>
                        <InputField
                            width={{ width: 330 }}
                            placeholder="Your name"
                            title="Full name"
                            onChangeText={(fullName) => this.setState({ fullName })}
                        />
                        <InputField
                            width={{ width: 330 }}
                            placeholder="Address"
                            title="Address line"
                            keyboardType={"email-address"}
                            onChangeText={(addressLine) => this.setState({ addressLine })}
                        />
                        <View style={{
                            display: 'flex', flexDirection: 'row'
                        }}>
                            <InputField
                                txt={{ marginHorizontal: 12 }}
                                width={{ width: 155 }}
                                placeholder="country"
                                title="Email or Phone"
                                onChangeText={(fullName) => this.setState({ fullName })}
                            />
                            <InputField
                                txt={{ marginHorizontal: 20 }}
                                width={{ width: 155, marginHorizontal: 10 }}
                                title="State"
                                placeholder="State"
                                keyboardType={'numeric'}
                                onChangeText={(fullName) => this.setState({ fullName })}
                            />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <InputField
                                txt={{ marginHorizontal: 12 }}
                                width={{ width: 155 }}
                                placeholder="City"
                                title="karachi"
                                onChangeText={(email) => this.setState({ email })}
                            />
                            <InputField
                                txt={{ marginHorizontal: 20 }}
                                width={{ width: 155, marginHorizontal: 10 }}
                                placeholder="Zip"
                                title="90876"
                                onChangeText={(fullName) => this.setState({ fullName })}
                            />
                        </View>
                        <View>
                            <Text note>Delivery</Text>
                            <DeliveryBox data={data} />
                            <Text style={styles.txtColor1}>To Pay</Text>
                            <View style={{ paddingBottom: 90, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.txtColor1}>Subtotal</Text>
                                    <Text style={styles.txtColor1}>Delivery cost</Text>
                                </View>
                                <View>
                                    <Text style={styles.txtColor2}>PR 506.00</Text>
                                    <Text style={styles.txtColor2}>PR 506.00</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.txtColor2}>112.00</Text>
                                <Text style={styles.txtColor1}>Total</Text>
                            </View>
                        </View>
                    </View>

                </ScrollView>
                <View style={styles.footer}>
                    <MaterialCommunityIcons name="arrow-left" size={28} style={styles.inputIcon} onPress={this.props.onPrev} />
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.props.onNext}>
                        <Text style={styles.buttonText}>Continue Shopping</Text>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
}

// let mapDispatchToProps = dispatch => {
//   return {
//     signupFunc: data => {
//       dispatch(signup(data));
//     }
//   };
// };

// let mapStateToProps = state => {
//   console.log(state.authReducer, 'state')
//   return {
//     isLogin: state.authReducer.isLogin
//   };
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignUpView);;
export default ShippingInfo



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    txtColor1: {
        fontSize: 12, color: 'gray'
    },
    txtColor2: {
        fontSize: 14, color: 'purple'
    },
    txtStyle: {
        textDecorationLine: 'underline',
        color: "#7647C6",
        fontSize: 14,
        marginBottom: 20
    },
    viewStyle: {
        flex: 1,
        marginTop: 15,
        marginHorizontal: 20,
        alignSelf: 'center',
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
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eee',
        marginTop: 120,
        width: '100%',
        padding: 5
    },
    inputIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        borderRadius: 180,
        marginHorizontal: 10,
        marginBottom: 5,
        height: 50,
        width: 50
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: '80%',
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#7647C6",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
    },
});