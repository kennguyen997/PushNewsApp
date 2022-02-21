import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import About from '../Components/restaurantDetail/About';
import MenuItems from '../Components/restaurantDetail/MenuItems';
import {RootStackParams} from '../Navigation';
import {dataFake} from '../Utility/data';
import {FoodType} from '../Models';
import ViewCart from '../Components/restaurantDetail/ViewCart';
import {RootState, selectors} from '../Redux/Slices';
import {connect} from 'react-redux';

type Props = StackScreenProps<RootStackParams, 'RestaurantDetail'> & {
  // If you have any other custom props, this is totally optional.
  customProp: number;
} & ReturnType<typeof mapStateToProps>;

const RestaurantDetail: FC<Props> = ({route, order, navigation}) => {
  const pushToAddToCart = (foodOrder: FoodType) => {
    return navigation.navigate('AddToCart', foodOrder);
  };

  return (
    <View style={styles.mainArea}>
      <About route={route} />
      <MenuItems
        restaurantName={route.params.name}
        foods={dataFake.foods}
        pushToAddToCart={pushToAddToCart}
      />
      {order && <ViewCart {...{order}} />}
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  order: selectors.order.select(state),
});

export default connect(mapStateToProps)(RestaurantDetail);

const styles = StyleSheet.create({
  mainArea: {flex: 1},
});
