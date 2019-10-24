/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import ForgotPassword from './src/screens/forgot-password';
import HelpAsk from "./src/screens/help-ask";
import React, {Fragment} from 'react';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';
import Congratulation from "./src/screens/order-finish";
import Posts from "./src/screens/home";
import OnBoardExplore from "./src/screens/onboard-explore";


YellowBox.ignoreWarnings(['Warning: ...']);
console.disableYellowBox = true;




class MainApplication extends React.Component {
    render(){
        return (
            // <Provider store={store}>
                <App/>
            // </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => MainApplication);
