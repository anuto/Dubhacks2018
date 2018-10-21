import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StoreScreen from '../screens/StoresScreen';
import SearchScreen from '../screens/SearchScreen';
import ReceiptScreen from '../screens/ReceiptScreen';
import SettingsScreen from '../screens/SettingsScreen';

let navigationOptions = (tabBarLabel, name) {
  tabBarLabel: tabBarLabel,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-' + name}
    />
  ),
};


// props: tabBarLabel = the label that shows up on the tab bar
//    name = not sure

export default createBottomTabNavigator({
  Home: {screen: HomeScreen, navigationOptions: () => this.navigationOptions("Home", "home")},
  Receipt: {screen: ReceiptScreen, navigationOptions: () => this.navigationOptions("Add Receipt", "add")},
  Search: {screen: SearchScreen, navigationOptions: () => this.navigationOptions("Search", "search")},
  Store: {screen: StoreScreen, navigationOptions: () => this.navigationOptions("Stores", "map")},
  Settings: {screen: SettingsScreen, navigationOptions: () => this.navigationOptions("Settings", "options")}
});
