import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import Profile from '../Screens/Profile';
import Home from '../Screens/Home';
import RestaurantDetail from '../Screens/RestaurantDetail';
import {RestaurantType} from '../Models';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Home: undefined;
  RestaurantDetail: RestaurantType;
  Profile: undefined;
};

export type RootRouteProps<RouteName extends keyof RootStackParams> = RouteProp<
  RootStackParams,
  RouteName
>;

const Stack = createNativeStackNavigator<RootStackParams>();

const NavigationRender = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRender;
