import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';


export default CustomHeader = (props) => {
  return (
    <Header style={props.headerStyle}>
      <Left>
        <Button onPress={props.onPressLeft} transparent>
          {props.iconLeft}
        </Button>
      </Left>
      <Body>
        <Title style={{color: 'black', fontSize: 14, fontWeight: 'normal'}}>{props.bodyText}</Title>
      </Body>
      <Right>
        <Button transparent>
          {props.iconRight}
        </Button>
      </Right>
    </Header>
  );
}