import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList, Image } from 'react-native';



export default DeliveryBox = (props) => {
  return (
    <View>
      <FlatList style={styles.list}
        // contentContainerStyle={styles.listContainer}
        data={props.data}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(post) => {
          const item = post.item;
          return (
            <View style={styles.container} onPress={props.onClickListener}>
              <Image style={styles.buttonContainer}
                source={{ uri: item.path }} />
              <Text style={styles.styleText}>{item.mime}</Text>
            </View>
          )
        }} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    width: '45%',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1
  },
  buttonContainer: {
    width: 60,
    height: 25,
    backgroundColor: "#7647C6",
    marginHorizontal: 10

  },
  styleText: {
    color: "gray",
  },
  signUpText: {
    color: 'white',
  },
})