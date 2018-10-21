// import React from 'react';
// import { Platform } from 'react-native';
// import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
//
// import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
// import StoreScreen from '../screens/StoresScreen';
// import SearchScreen from '../screens/SearchScreen';
// import ReceiptScreen from '../screens/ReceiptScreen';
// import SettingsScreen from '../screens/SettingsScreen';
//
// function navigationOptions(navigation, tabBarLabel, name) {
//   tabBarLabel: this.tabBarLabel,
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-' + this.name}
//     />
//   )
// };
//
//
// // props: tabBarLabel = the label that shows up on the tab bar
// //    name = not sure
//
// export default createBottomTabNavigator({
//   Home: {screen: HomeScreen, navigationOptions: ({navigation}) => this.navigationOptions({navigation}, "Home", "home")},
//   Receipt: {screen: ReceiptScreen, navigationOptions: ({navigation}) => this.navigationOptions("Add Receipt", "add")},
//   Search: {screen: SearchScreen, navigationOptions: ({navigation}) => this.navigationOptions("Search", "search")},
//   Store: {screen: StoreScreen, navigationOptions: ({navigation}) => this.navigationOptions("Stores", "map")},
//   Settings: {screen: SettingsScreen, navigationOptions: ({navigation}) => this.navigationOptions("Settings", "options")}
// });

import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StoreScreen from '../screens/StoresScreen';
import SearchScreen from '../screens/SearchScreen';
import ReceiptScreen from '../screens/ReceiptScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const StoreStack = createStackNavigator({
  Store: StoreScreen,
});

StoreStack.navigationOptions = {
  tabBarLabel: 'Stores',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-map'
      }
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  ),
};

const ReceiptStack = createStackNavigator({
  Receipt: ReceiptScreen,
});

ReceiptStack.navigationOptions = {
  tabBarLabel: 'Add Receipt',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-add'
      }
    />
  ),
};

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });
//
// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };

export default createBottomTabNavigator({
  Home: HomeScreen,
  Receipt: ReceiptScreen,
  Search: SearchScreen,
  Store: StoreScreen,
  Settings: SettingsScreen,
});
