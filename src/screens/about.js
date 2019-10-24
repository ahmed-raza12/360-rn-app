import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, ImageBackground, Left, Right, Body, Title } from 'react-native';
// import { Header } from "native-base";
import Feather from 'react-native-vector-icons/Feather';
import CustomHeader from "../component/header";
// import { Header } from "native-base";
import FaqList from "../component/faq-list";
import AboutImg from "../images/about.png";
import CommonButton from "../component/button";
export default class About extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    // headerTitle: 'About',
  };
  render() {
    return (
      <View>
        <ImageBackground source={AboutImg} style={{width: '100%', height: 400 }}>
          <CustomHeader headerStyle={{ backgroundColor: 'transparent' }}
            iconLeft={<Feather name="arrow-left" size={22} />}
            iconRight={<Feather name="search" size={22} color="white" />}
            bodyText={"ABOUT"}
            onPressLeft={() => this.props.navigation.goBack()} />
          <Text style={{ fontSize: 20, marginHorizontal: 14, marginVertical: 10 }}>360 Degree</Text>
          <Text style={{ fontSize: 16, marginVertical: 10, color: '#A0A0A0', marginHorizontal: 10 }}>Online product shopping app that can help you to explore and shopping on your smartphone easily</Text>
          <Text style={{ fontSize: 16, marginVertical: 10, color: '#A0A0A0', marginHorizontal: 10 }}>360 Degree was built to make our consumer happy with our simple service to make them shop easily and instantly</Text>
          <Text style={{ marginHorizontal: 14, marginVertical: 10 }}>Provided by</Text>
          <CommonButton style={{ width: 220, marginHorizontal: 10 }} title="360 Degree" />
          <Text style={{ marginHorizontal: 14, marginVertical: 10 }}>Maintained by</Text>
          <CommonButton style={{ width: 220, marginHorizontal: 10 }} title="360 Degree" />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center'
  },
  description: {
    marginTop: 20,
    textAlign: 'center',
    color: "black",
    fontSize: 14,
    marginHorizontal: 50,
    marginVertical: 30
  },
  buttonContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 350,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: "#7647C6",
  },
  signUpText: {
    color: 'white',
  },
})