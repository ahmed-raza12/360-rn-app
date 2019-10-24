import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import SignUpView from "./src/screens/register";
import LoginView from "./src/screens/login";
import ForgotPassword from "./src/screens/forgot-password";
import HelpAsk from "./src/screens/help-ask";
import HomeTabs from "./src/screens/home";
import Congratulation from "./src/screens/order-finish";
import GetStart from "./src/screens/start";
import FaqScreen from "./src/screens/faq";
import Favourite from "./src/screens/favourite";
import Help from "./src/screens/help";
import Transaction from "./src/screens/transaction";
import ProfileTabs from "./src/screens/profile-tab";
import ShippingCart from "./src/screens/shipping-cart";
import SwiperComponent from "./src/screens/order-swipe";
import OnBoardContainer from "./src/screens/onboard-container";
import About from "./src/screens/about";
import ChoosePayment from "./src/screens/choose-payment";
import Likes from "./src/screens/like";
import Follows from "./src/screens/follows.js";
import Hoodie from "./src/home/hoodie";
import AddProduct from "./src/screens/add-product";
import TransactionDetails from "./src/screens/transaction-detail";
import SellerProfile from "./src/screens/seller-products";
import CustomerProfile from "./src/screens/customer-profile";
import DetailsScreen from "./src/screens/details";

// import Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavImg from "./src/images/nav-img.png";

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

const BottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeTabs,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Feather name="home" color={tintColor} size={28} />
      )
    },
  },
  Favourite: {
    screen: Favourite,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="hearto" color={tintColor} size={28} />
      ),
    },
  },
  Cart: {
    screen: SwiperComponent,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="shoppingcart" color={tintColor} size={28} />
      ),
    },
  },
  Transaction: {
    screen: Transaction,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="md-paper" color={tintColor} size={28} />
      ),
    },
  },
  Profile: {
    screen: ProfileTabs,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name="person-outline" color={tintColor} size={28} />
      ),
    },
  },
}, {
  initialRouteName: 'Home',
  backBehavior:'history',
  tabBarOptions: {
    activeTintColor: '#7647C6',
    showLabel: false,
    showIcon: true
  },
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
}});


const CustomDrawerContentComponent = props => (
  <ImageBackground source={NavImg} style={{ width: '100%', height: '100%' }}>
    <ScrollView>
      <SafeAreaView
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View style={{ marginTop: 90 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Help")} style={styles.drawerStyle}>
            <Text style={styles.drawerText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("FaqScreen")} style={styles.drawerStyle}>
            <Text style={styles.drawerText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("About")} style={styles.drawerStyle}>
            <Text style={styles.drawerText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drawerStyle}>
            <Text style={styles.drawerText}>Rate This App</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  </ImageBackground>
);




const RootStack = createStackNavigator({
  GetStart: {
    screen: GetStart,
    navigationOptions: {
      header: null
    }
  },
  Likes: {
    screen: Likes,
    navigationOptions: {
      header: null
    }
  },
  Follows: {
    screen: Follows,
    navigationOptions: {
      header: null
    }
  },
  FaqScreen: {
    screen: FaqScreen
  },
  Login: {
    screen: LoginView
  },
  
  Register: {
    screen: SignUpView
  },
  ShippingCart: {
    screen: ShippingCart,
    navigationOptions: {
      header: null
    }
  },
  ForgotPasswordScreen: ForgotPassword,
  AskHelp: HelpAsk,
  Help: Help,
  SwiperComponent: {
    screen: SwiperComponent,
    navigationOptions: {
      header: null
    }
  },
  BottomTabNavigator: {
    screen: BottomTabNavigator
  },

  About: {
    screen: About,
    navigationOptions: {
      header: null
    }
  },
  ChoosePayment: {
    screen: ChoosePayment,
    navigationOptions: {
      header: null
    }
  },
  OnBoardContainer: {
    screen: OnBoardContainer,
    navigationOptions: {
      header: null
    }
  },
  ProfileTabs: {
    screen: ProfileTabs,
    navigationOptions: {
      header: null
    }
  },
  Hoodie: {
    screen: Hoodie,
    navigationOptions: {
      // header: null
    }
  },
  AddProduct: {
    screen: AddProduct,
    navigationOptions: {
      // header: null
    }
  },
  TransactionDetails: {
    screen: TransactionDetails,
    navigationOptions: {
      // header: null
    }
  },
  SellerProfile: {
    screen: SellerProfile,
    navigationOptions: {
      // header: null
    }
  },
  CustomerProfile: {
    screen: CustomerProfile,
    navigationOptions: {
      header: null
    }
  },
  BottomTabNavigator: {
    screen: BottomTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  DetailsScreen: {
    screen: DetailsScreen,
    navigationOptions: {
      header: null,
    }
  },
}, {
  initialRouteName: 'GetStart',
  // headerMode: 'none'
})



const MyDrawerNavigator = createDrawerNavigator({
  BottomTabNavigator: {
    screen: BottomTabNavigator,
    navigationOptions: {
      header: null
    }
  },
  Help: {
    screen: Help,
    navigationOptions: {
      header: null
    }
  },
  FaqScreen: {
    screen: FaqScreen,
    navigationOptions: {
      header: null
    }
  },
  RootStack: {
    screen: RootStack
  },
  DetailsScreen: {
    screen: DetailsScreen,
    navigationOptions: {
      header: null,
    }
  },
  SwiperComponent: {
    screen: SwiperComponent,
    navigationOptions: {
      // header: null,
    }
  },
}, {
  initialRouteName: 'RootStack',
  contentComponent: CustomDrawerContentComponent,
  drawerType: 'slide',
  defaultNavigationOptions: {
    header: null
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });




const AppContainer = createAppContainer(MyDrawerNavigator);

const App = () => {
  return (
    <AppContainer />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  drawerStyle: {
    marginVertical: 15,
    marginHorizontal: 25,
  },
  drawerText: {
    color: '#fff'
  }
});

export default App;
