import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import About from '../Components/restaurantDetail/About';
import MenuItems from '../Components/restaurantDetail/MenuItems';
import {RootStackParams} from '../Navigation';
import {dataFake} from '../Utility/data';

type Props = StackScreenProps<RootStackParams, 'RestaurantDetail'> & {
  // If you have any other custom props, this is totally optional.
  customProp: number;
};

const RestaurantDetail: FC<Props> = ({route, customProp}) => {
  console.log(customProp);
  return (
    <View style={styles.mainArea}>
      <About route={route} />
      <MenuItems restaurantName={route.params.name} foods={dataFake.foods} />
    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  mainArea: {flex: 1},
});
