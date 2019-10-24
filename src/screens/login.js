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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { connect } from 'react-redux';
// import { signup } from '../store/action/action';


class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            show: true
        }
    }
    static navigationOptions = {
        title: 'LOGIN',
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 14,
          marginLeft: -5
      }
    }
    componentDidMount() {
        // console.log(this.props.isLogin, 'did')
    }
    //   componentWillReceiveProps(nextProps){
    //     console.log(nextProps.isLogin, 'next')
    //   }
    submitForm = () => {
        // const { email, password } = this.state
        // if (email === '' || password === '') {
        //     alert('all fields are required')
        // } else {
        //     let user = {
        //         email,
        //         password
        //     }
        this.props.navigation.navigate("BottomTabNavigator")
            // console.log( email, password, user, 'signup')
            //   this.props.signupFunc(user)
        // }

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <View style={styles.viewStyle}>
                        <InputField
                            value={this.state.email}
                            width={{width: '90%'}}
                            placeholder="Username or Email"
                            title="Username or Email"
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <InputField
                            value={this.state.password}
                            width={{width: '90%'}}
                            title="Password"
                            placeholder="Password"
                            password={this.state.show}
                            onChangeText={(password) => this.setState({ password })}
                            eye={this.state.show ?  <AntDesign onPress={() => this.setState({show: false})} name="eyeo" size={28} style={styles.inputIcon} /> : <Icon name="eye-off" onPress={() => this.setState({show: true})} size={28} style={styles.inputIcon} />}
                        />
                        <CommonButton
                            title="Login"
                            // onPress={() => this.props.navigation.navigate("BottomTabNavigator")}
                            onPress={() => this.submitForm()}
                        />
                        <View style={styles.restoreButtonContainer}>
                            <TouchableOpacity style={styles.restoreButton1}>
                                <Text style={styles.txtStyle} onPress={() => this.props.navigation.navigate("Register")}>Register here</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.restoreButton2}>
                                <Text style={styles.txtStyle} onPress={() => this.props.navigation.navigate("ForgotPasswordScreen")}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{color: 'gray'}}>Or Login By</Text>

                        <View style={styles.containerbtn}>
                            <SocialBtn
                                title="facebook"
                                bgColor={styles.facebookButton}
                            />
                            <SocialBtn
                                title="Google +"
                                bgColor={styles.googleButton}
                            />
                        </View>
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
// )(LoginView);;
export default LoginView



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    inputIcon: {
        color: 'gray',
        marginRight: 5,
        justifyContent: 'flex-end'
    },
    txtStyle: {
        textDecorationLine: 'underline',
        color: "#7647C6",
        fontSize: 14
    },
    viewStyle: {
        marginTop: 15,
        alignItems: 'center',
        textAlign: 'left'
    },
    containerbtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    facebookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    restoreButtonContainer: {
        flexDirection: 'row',
        width: 330,
        marginBottom: 40,
    },
    restoreButton1: {
        flex:1,
        alignItems: 'flex-start'
    },
    restoreButton2: {
        flex:1,
        alignItems: 'flex-end'
    },
});