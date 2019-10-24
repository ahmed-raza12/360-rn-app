import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
// import { Header } from "native-base";
import FaqList from "../component/faq-list";
// import { Header } from 'react-native/Libraries/NewAppScreen';



const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "First Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" }
];
export default class FaqScreen extends Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: 'FAQ',
    title: 'FAQ'
  };
  render() {
    return (
        <FaqList data={dataArray} />
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