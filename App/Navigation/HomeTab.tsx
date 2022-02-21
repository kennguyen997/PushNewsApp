import React, {FC} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Offers from '../Screens/Offers/index';
import Home from '../Screens/Home';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs: FC = () => {
  return (
    <Tab.Navigator initialRouteName="Offers" shifting={true}>
      <Tab.Screen name="Explorer" component={Home} />
      <Tab.Screen name="Offers" component={Offers} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
