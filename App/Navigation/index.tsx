import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import Profile from '../Screens/Profile';
import Home from '../Screens/Home';
import RestaurantDetail from '../Screens/RestaurantDetail';
import {FoodType, RestaurantType} from '../Models';
import AddToCart from '../Screens/AddToCart';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  Home: undefined;
  RestaurantDetail: {data: RestaurantType};
  Profile: undefined;
  AddToCart: FoodType;
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
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="AddToCart"
          component={AddToCart}
          // options={props => {
          //   const {navigation} = props;
          //   return {
          //     headerLeft: () => (
          //       <TouchableOpacity
          //         onPress={() => navigation.toggleDrawer()}
          //         style={{flexDirection: 'row', paddingLeft: 10}}>
          //         <Icon size={15} name="close" />
          //       </TouchableOpacity>
          //     ),
          //     gestureEnabled: false,
          //   };
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRender;
