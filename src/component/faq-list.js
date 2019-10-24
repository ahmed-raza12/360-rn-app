import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { Container, Header,  Content, Accordion } from "native-base";


export default FaqScreen = (props) => {

    const _renderHeader = (item) => {
        return (
            <View style={{
                flexDirection: "row",
                padding: 15,
                marginVertical: 8,
                borderRadius: 10,
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff"
            }}>
                <Text style={{ fontWeight: "600", fontSize: 17 }}>
                    {" "}{item.title}
                </Text>
            </View>
        );
    }
    const _renderContent = (item) => {
        return (
            <Text
                style={{
                    backgroundColor: "#fff",
                    padding: 10,
                    marginTop: -20,
                    borderRadius: 10,
                    color: 'gray'
                }}
            >
                {item.content}
            </Text>
        );
    }
    return (
        <Container>
            <Content padder style={{ backgroundColor: "#eee", borderWidth: 0 }}>
                <Accordion
                    // contentStyle={{backgroundColor: 'black'}}
                    dataArray={props.data}
                    animation={true}
                    expanded={true}
                    renderHeader={_renderHeader}
                    renderContent={_renderContent}
                />
            </Content>
        </Container>
    );

}