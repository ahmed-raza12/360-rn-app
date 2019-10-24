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


class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    static navigationOptions = {
        title: 'FORGOT PASSWORD',
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 14,
          marginLeft: -5
        },
      };
    componentDidMount() {
        // console.log(this.props.isLogin, 'did')
    }
    //   componentWillReceiveProps(nextProps){
    //     console.log(nextProps.isLogin, 'next')
    //   }
    submitForm = () => {
        const { fullName, email, password, registeredAs } = this.state
        if (registeredAs === '' || fullName === '') {
            alert('all fields are required')
        } else {
            let user = {
                fullName,
                email,
                password,
                registeredAs
            }
            console.log(fullName, email, password, 'signup')
            //   this.props.signupFunc(user)
        }

    }
    clickme = () => {
        Alert.alert(this.state.registeredAs)
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <View style={styles.viewStyle}>

                        <Text style={{textAlign: 'center', marginVertical: 30}}>
                            Hmm! it seems you're  in problem when signing. fill form below to get accses your account. 
                        </Text>
                        <InputField
                            width={{width: 330}}
                            placeholder="Email or Phone No"
                            title="Email or Phone"
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <CommonButton
                            title="Reset Password"
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
// )(LoginView);;
export default ForgotPassword



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
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
        justifyContent: 'space-between'
    },
    facebookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    restoreButtonContainer: {
        flexDirection: 'row',
        width: 350,
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