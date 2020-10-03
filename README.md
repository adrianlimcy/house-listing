# Steps
1.  npm install -g expo-cli
2.  expo init house-listing
3.  cd house-listing
4.  npm start
5.  scan the QR code with your mobile device
6.  npm install react-navigation react-navigation-stack react-navigation-tabs
7.  npm audit fix
9.  met with error
    -> expo install react-native-gesture-handler
10. met with error ... react-navigation-stack has dependancies
    -> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

# File Organisation
1.  mkdir Screens
2.  touch Screens/Home.js
3.  touch Screens/Detail.js
4.  touch Screens/Setting.js

# Styling
1.  npm install styled-components
2.  got error
    - Unable to resolve "react-native-screens" from "node_modules/react-navigation-tabs/lib/module/navigators/createBottomTabNavigator.js"
3.  npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
4.  npm install
5.  npm audit fix
6.  error fixed

# Adding Listing Component
1.  mkdir Components
2.  touch Components/ListingItem.js



# Guide to solve issue listed at 9 and 10
Use below steps, this will work 100%.

Install React Navigation
npm install react-navigation

Install Dependencies
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

Install React Navigation Stack
npm install react-navigation-stack @react-native-community/masked-view

Start the app and clear cache with npm start -c
Update Imports

imports  will  look like this:
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
Errors? If you are still seeing errors and complaints about packages, do the following:

rm -r node_modules

rm package-lock.json

expo upgrade

npm start -c