import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import About from '../Components/restaurantDetail/About';
import MenuItems from '../Components/restaurantDetail/MenuItems';
import {FoodsType} from '../Models';
import {RootStackParams} from '../Navigation';
import {connect} from 'react-redux';
import {RootState, selectors} from '../Redux/Slices';
import ViewCart from '../Components/restaurantDetail/ViewCart';

const foods: FoodsType[] = [
  {
    id: '1',
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    id: '2',
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    id: '3',
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    id: '4',
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    id: '5',
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    id: '6',
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
];

type Props = StackScreenProps<RootStackParams, 'RestaurantDetail'> & {
  // If you have any other custom props, this is totally optional.
  customProp: number;
} & ReturnType<typeof mapStateToProps>;

const RestaurantDetail: FC<Props> = ({route, order, navigation}) => {
  const pushToAddToCart = (foodOrder: FoodsType) => {
    return navigation.navigate('AddToCart', foodOrder);
  };

  return (
    <View style={styles.mainArea}>
      <About route={route} />
      <MenuItems
        restaurantName={route.params.name}
        foods={foods}
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
