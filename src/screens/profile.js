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
import DatePicker from "react-native-modal-datetime-picker";

import InputField from '../component/input';
import SocialBtn from '../component/socialbtn';
import CommonButton from "../component/button";
import FooterBtn from "../component/footerBtn";


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import { connect } from 'react-redux';
// import { signup } from '../store/action/action';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            birthday: null,
            password: '',
            isVisible: false
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

    showDatePicker = () => {
        this.setState({
            isVisible: true
        })
    }
    handleDatePicked = date => {
        var dob = date;
        var dd = dob.getDate();
        var mm = dob.getMonth() + 1; //January is 0! 
        var yyyy = dob.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }
        if (mm < 10) {
            mm = '0' + mm
        }
        var dob = dd + '/' + mm + '/' + yyyy;

        this.setState({
            isVisible: false,
            birthday: date
        })
        console.log("A date has been picked: ", date);
    };

    hideDatePicker = date => {
        this.setState({
            isVisible: false
        })
        console.log("A date has been picked: ", date);
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <View style={styles.viewStyle}>
                        <InputField
                            width={{ width: '90%' }}
                            placeholder="Pick your username"
                            title="Username"
                            onChangeText={(fullName) => this.setState({ fullName })}
                        />
                        <InputField
                            width={{ width: '90%' }}
                            placeholder="Email or Phone No"
                            keyboardType={"email-address"}
                            title="Email or Phone"
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <InputField
                            width={{ width: '90%' }}
                            title="Number"
                            placeholder="Number"
                            password={true}
                            keyboardType={'numeric'}
                            onChangeText={(password) => this.setState({ password })}
                        />
                        <Text style={styles.textStyl}>
                            Birthday
                        </Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputs} onPress={this.showDatePicker}>{new Date(this.state.birthday).toLocaleDateString()}</Text>
                        </View>
                        <DatePicker
                            mode="date"
                            value={this.state.birthday}
                            locale="en_GB" // Use "en_GB" here
                            isVisible={this.state.isVisible}
                            onConfirm={this.handleDatePicked}
                            onCancel={this.hideDatePicker}
                            is24Hour={true}
                        />
                        <FooterBtn
                            title="Update Profile"
                        />
                        {
                            this.props.isLogin ? <ActivityIndicator size={100} color="green" /> : null
                        }
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
export default Profile



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textStyl: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginHorizontal: 5,
        alignSelf: 'stretch',
        marginVertical: 2,
        color: 'gray',
        marginLeft: 16
    },
    inputContainer: {
        backgroundColor: '#fff',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        width: '90%',
        height: 50,
        // marginBottom: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        marginTop: 20,
        // borderColor: 'green',
        flex: 1,
    },
    viewStyle: {
        marginTop: 15,
        alignItems: 'center',
        textAlign: 'left'
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