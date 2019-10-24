import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    TextInput,
    FlatList,
    Button
} from 'react-native';
import InputField from "../component/input";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import sendIcon from "../images/send-icon.png";

export default class HelpAsk extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit amet" },
                { id: 2, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit amet" },
                { id: 3, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
                { id: 4, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met Lorem ipsum dolor sit a met Lorem ipsum dolor sit a met Lorem ipsum dolor sit a met" },
                { id: 5, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
                { id: 6, date: "9:50 am", type: 'out', message: "Lorem ipsum dolor sit a met" },
                { id: 7, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
                { id: 8, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
                { id: 9, date: "9:50 am", type: 'in', message: "Lorem ipsum dolor sit a met" },
            ]
        };
    }
    
    static navigationOptions = {
        title: 'Help Ask',
        headerStyle: {
          // backgroundColor: '#f4511e',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 14,
        },
      };

    renderDate = (date) => {
        return (
            <Text style={styles.time}>
                {date}
            </Text>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                    data={this.state.data}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    renderItem={(message) => {
                        console.log(item);
                        const item = message.item;
                        let inMessage = item.type === 'in';
                        let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                        return (
                            <View style={[styles.item, itemStyle]}>
                                <View style={[styles.balloon]}>
                                    <Text style={{color: 'white'}}>{item.message}</Text>
                                </View>
                            </View>
                        )
                    }} />
                <View style={styles.footer}>
                    <MaterialCommunityIcons name="arrow-left" size={32} style={styles.inputIcon} />
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.inputs}
                            placeholder="Write a message..."
                            underlineColorAndroid='transparent'
                            onChangeText={(name_address) => this.setState({ name_address })} />
                    </View>

                    <TouchableOpacity style={styles.btnSend}>
                        <Image source={sendIcon} style={styles.iconSend} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        paddingHorizontal: 17,
    },
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 10,
        padding: 5,
    },
    btnSend: {
        // backgroundColor: "#00BFFF",
        width: 40,
        height: 40,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'lightblue',
        marginVertical: 5,
        marginHorizontal: 8
    },
    iconSend: {
        width: 25,
        height: 25,
        // alignSelf: 'center',
    },
    inputContainer: {
        // borderBottomColor: '#F5FCFF',
        // // backgroundColor: '#FFFFFF',
        // width: 350,
        // borderRadius: 300,
        // borderBottomWidth: 1,
        // height: 40,
        // flexDirection: 'row',
        // alignItems: 'center',
        // flex: 1,
        // marginRight: 10
        backgroundColor: '#FFFFFF',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 6,
        width: 230,
        height: 45,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 35,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    balloon: {
        maxWidth: 250,
        padding: 15,
        borderRadius: 10,
        color: 'white'
    },
    itemIn: {
        alignSelf: 'flex-start',
        backgroundColor: '#9A67EA',
        color: 'white'
    },
    itemOut: {
        alignSelf: 'flex-end',
        backgroundColor: '#7E57C2',
        color: 'white'
    },
    time: {
        alignSelf: 'flex-end',
        margin: 15,
        fontSize: 12,
        color: "#808080",
    },
    item: {
        marginVertical: 14,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#eeeeee",
        borderRadius: 10,
        padding: 5
    },
    inputIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        borderRadius: 200,
        marginHorizontal: 10
    }
});  