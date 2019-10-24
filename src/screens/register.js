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


class SignUpView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
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
    const { fullName, email, password, registeredAs } = this.state
    if (registeredAs === '' || fullName === '') {
      alert('all fields are required')
    } else {
      let user = {
        fullName,
        email,
        password
      }
      console.log(fullName, email, password, 'signup')
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
              placeholder="Pick your username"
              title="Username"
              onChangeText={(fullName) => this.setState({ fullName })}
            />
            <InputField
              width={{width: '90%'}}
              placeholder="Email or Phone No"
              title="Email or Phone"
              onChangeText={(email) => this.setState({ email })}
            />
            <InputField
              width={{width: '90%'}}
              title="Password"
              placeholder="Password"
              password={true}
              onChangeText={(password) => this.setState({ password })}
              eye={true}
            />
            <CommonButton
              title="Register"
            />
            <TouchableOpacity>
              <Text style={styles.txtStyle} onPress={() => this.props.navigation.navigate("Login")}>Have an account login here</Text>
            </TouchableOpacity>

            <Text>Or Register By</Text>

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
// )(SignUpView);;
export default SignUpView



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
    justifyContent: 'space-between',
    marginVertical: 20
  },
  facebookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  }
});