import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Container } from "native-base";
import FaqList from "../component/faq-list";

import AntDesign from 'react-native-vector-icons/AntDesign';


const dataArray = [
  { title: "First Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Second Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" },
  { title: "Third Element", content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" }
];
export default class Help extends Component {
  render() {
    return (
      <Container style={{backgroundColor: '#eee'}}>
        <Text style={styles.description}>To find common help documents please take a look in FAQ. incase you have specific question hit ask button.</Text>
        <FaqList data={dataArray} />
        <TouchableHighlight onPress={() => this.props.navigation.navigate("AskHelp")}>
          <AntDesign name="question" style={styles.questionIcon} size={30} />
        </TouchableHighlight>
      </Container>
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
    marginHorizontal: 6,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff'
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
  questionIcon: {
    backgroundColor: 'lightgray',
    color: 'gray',
    padding: 8,
    width: 50,
    height: 50,
    borderRadius: 180,
    marginHorizontal: 10,
    alignSelf: 'flex-end',
    marginVertical: 20,
    marginHorizontal: 20
},
})