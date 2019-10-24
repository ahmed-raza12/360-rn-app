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


class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPassword: '',
            newPassword: '',
            repeatPassword: ''
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
        const { currentPassword, newPassword, repeatPassword} = this.state
        if (currentPassword === '') {
            alert('all fields are required')
        } else {
            let user = {
                currentPassword,
                newPassword,
                repeatPassword
            }
            console.log(currentPassword, newPassword, 'signup')
            //   this.props.signupFunc(user)
        }

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <View style={styles.viewStyle}>
                        <InputField
                            width={{width: '90%'}}
                            placeholder="Current Password"
                            title="Current Password"
                            password={true}
                            onChangeText={(currentPassword) => this.setState({ currentPassword })}
                        />
                        <InputField
                            width={{width: '90%'}}
                            placeholder="New Password"
                            title="New Password"
                            password={true}
                            onChangeText={(newPassword) => this.setState({ newPassword })}
                        />
                        <InputField
                            width={{width: '90%'}}
                            title="Repeat new password"
                            placeholder="Repeat new password"
                            password={true}
                            onChangeText={(repeatPassword) => this.setState({ repeatPassword })}
                        />
                        <FooterBtn
                            title="Update Password"
                            onPrev={this.props.onPress}
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
// )(ChangePassword);;
export default ChangePassword



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