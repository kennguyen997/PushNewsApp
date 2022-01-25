import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import Profile from '../Screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import RestaurantDetail from '../Screens/RestaurantDetail';

export type RootStackParams = {
  Home: undefined;
  RestaurantDetail: {
    name: string;
    image: string;
    price: string;
    reviews: string;
    rating: string;
    categories: string[];
  };
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
