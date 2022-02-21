import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import Menu from './Menu';
import {RootStackParams} from '../../Navigation';
import {dataFake} from '../../Utility/data';
import {FoodType} from '../../Models';
import ViewCart from './ViewCart';
import {RootState, selectors} from '../../Redux/Slices';
import {connect} from 'react-redux';
import About from './About';

type Props = StackScreenProps<RootStackParams, 'RestaurantDetail'> & {
  // If you have any other custom props, this is totally optional.
} & ReturnType<typeof mapStateToProps>;

const RestaurantDetail: FC<Props> = ({route, order, navigation}) => {
  const pushToAddToCart = (foodOrder: FoodType) => {
    return navigation.navigate('AddToCart', foodOrder);
  };

  return (
    <View style={styles.container}>
      <About data={route.params.data} />
      <Menu
        restaurantName={route.params.data.name}
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
  container: {
    flex: 1,
  },
});
