import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text } from 'react-native';

/* Our top-level navigator. This is where you should define the routes.
https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
*/
const Home = () => {
  return (
    <View>
      <Text>Home view</Text>
    </View>
  );
};

const AppNavigator = createStackNavigator({
  Home,
});

/* This is our `AppContainer` which will link our top-level navigator (AppNavigator) to the app environment. 
https://reactnavigation.org/docs/en/app-containers.html */

export default createAppContainer(AppNavigator);
