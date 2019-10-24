import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import { Dimensions } from "react-native";
import TShirt from "../home/t-shirt";
import Hoodie from "../home/hoodie";

import CustomHeader from "../component/header";
import Feather from 'react-native-vector-icons/Feather';

export default class HomeTabs extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Container>
                <CustomHeader headerStyle={{ backgroundColor: '#fff' }}
                    iconLeft={<Feather name="menu" size={22} />}
                    iconRight={<Feather name="search" size={22} />}
                    onPressLeft={() => this.props.navigation.openDrawer()} />
                <Tabs renderTabBar={() => <ScrollableTab
                    style={{ height: 40}} />} tabBarUnderlineStyle={{ backgroundColor: '#7647C6', width: 20 }} tabContainerStyle={{ width: 60, height: 40 }}>
                    <Tab
                        heading="T-SHIRT"
                        tabStyle={{ backgroundColor: 'white'}} textStyle={{ color: 'gray', fontSize: 10 }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6'}}
                        activeTextStyle={{ color: '#7647C6', fontSize: 8, textAlign: 'left' }}>
                        <TShirt properties={this.props} />
                    </Tab>
                    <Tab heading="HOOWDIE"
                        tabStyle={{ backgroundColor: 'white', fontSize: 8 }} textStyle={{ color: 'gray', fontSize: 10 }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6' }}
                        activeTextStyle={{ color: '#7647C6', fontSize: 8, textAlign: 'left' }}>
                        <Hoodie />
                    </Tab>
                    <Tab heading="JACKETS"
                        tabStyle={{ backgroundColor: 'white'}} textStyle={{ color: 'gray', fontSize: 10 }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6'}}
                        activeTextStyle={{ color: '#7647C6', fontSize: 8, textAlign: 'left' }}>
                        <TShirt />
                    </Tab>
                    <Tab heading="ACCESSORIE"
                        tabStyle={{ backgroundColor: 'white'}} textStyle={{ color: 'gray', fontSize: 10 }}
                        activeTabStyle={{ backgroundColor: 'white', color: '#7647C6'}}
                        activeTextStyle={{ color: '#7647C6', fontSize: 8, textAlign: 'left' }}>
                        <TShirt />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}