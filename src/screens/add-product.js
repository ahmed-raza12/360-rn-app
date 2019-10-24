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
    Image,
    FlatList
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import { Textarea, Button } from 'native-base';
import InputField from '../component/input';
import SocialBtn from '../component/socialbtn';
import CommonButton from "../component/button";
import FooterBtn from "../component/footerBtn";
import DeliveryBox from "../component/delivery-box";


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import { connect } from 'react-redux';
// import { signup } from '../store/action/action';


class AddProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            brandName: '',
            productName: '',
            details: null,
            price: '',
            discountPrice: '',
            images: []
        }
    }
    static navigationOptions = {
        title: 'ADD PRODUCT',
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
        const { fullName, email } = this.state
        if (fullName === '') {
            alert('all fields are required')
        } else {
            let user = {
                fullName,
                email,
            }
            console.log(fullName, email, 'signup')
            //   this.props.signupFunc(user)
        }

    }
    picker = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            this.setState({
                images
            })
            console.log(images, 'img');

        });
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={'postion' || 'height' || 'padding'}>
                <ScrollView>
                    <View style={styles.viewStyle}>
                        <InputField
                            txt={{ marginHorizontal: 12 }}
                            width={{ width: '95%',  marginHorizontal: 10 }}
                            placeholder="Brand Name here"
                            title="Brand Name"
                            onChangeText={(brandName) => this.setState({ brandName })}
                        />
                        <InputField
                            txt={{ marginHorizontal: 12 }}
                            width={{ width: '95%',  marginHorizontal: 10 }}
                            placeholder="Product Name here"
                            title="Product Name"
                            onChangeText={(productName) => this.setState({ productName })}
                        />
                        <Textarea rowSpan={4} style={{ width: '100%',  marginHorizontal: 10 }} bordered placeholder="Details of product  here" onChangeText={(details) => this.setState({ details })} />
                        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                            <View style={styles.contentColors}>
                                <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#00BFFF" }]}></TouchableOpacity>
                                <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#FF1493" }]}></TouchableOpacity>
                                <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#00CED1" }]}></TouchableOpacity>
                                <TouchableOpacity style={[styles.btnColor, { backgroundColor: "#FF4500" }]}></TouchableOpacity>
                            </View>
                            <View style={styles.contentSize}>
                                <TouchableOpacity style={styles.btnSize}><Text>S</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnSize}><Text>M</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnSize}><Text>L</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.btnSize}><Text>XL</Text></TouchableOpacity>
                            </View>
                        </View>
                        <InputField
                            txt={{ marginHorizontal: 12}}
                            width={{ width: '95%', marginHorizontal: 10 }}
                            placeholder="Price"
                            title="Price here"
                            onChangeText={(price) => this.setState({ price })}
                        />
                        <InputField
                            width={{ width: '95%',  marginHorizontal: 10 }}
                            placeholder="Discount price"
                            title="Discount price here"
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(discountPrice) => this.setState({ discountPrice })}
                        />
                        <Button style={{ backgroundColor: '#eee', height: 40, width: 60, alignSelf: 'center' }} onPress={this.picker}><Text style={{ textAlign: 'center' }}>Select Image</Text></Button>
                        <DeliveryBox data={this.state.images} />
                        <FooterBtn
                            title="Add Product"
                            onPress={this.props.onPress}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default AddProduct



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
        justifyContent: 'center',
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
    footer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#eeeeee',
        marginTop: 140,
        padding: 5,
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#7647C6",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 14,
    },
    inputIcon: {
        backgroundColor: 'lightgray',
        color: 'gray',
        padding: 8,
        borderRadius: 180,
        marginHorizontal: 10
    },
    contentColors: {
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        flexDirection: 'row',
        marginTop: 20
    },
    contentSize: {
        justifyContent: 'flex-end',
        marginHorizontal: 10,
        flexDirection: 'row',
        marginTop: 20
    },
    btnColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3
    },
    btnSize: {
        height: 30,
        width: 30,
        borderRadius: 40,
        borderColor: '#778899',
        borderWidth: 1,
        marginHorizontal: 3,
        backgroundColor: 'white',

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});