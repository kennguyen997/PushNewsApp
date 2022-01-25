import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {FoodsProps} from '../../Models';
// import {useDispatch} from 'react-redux';
// import {useSelector} from 'react-redux';

interface Prop {
  restaurantName: string;
  foods: FoodsProps[];
  hideCheckbox?: boolean;
  marginLeft?: number;
}

const MenuItems: FC<Prop> = ({
  // restaurantName,
  foods,
  // hideCheckbox,
  marginLeft,
}) => {
  // const dispatch = useDispatch();

  // const selectItem = (item, checkboxValue) =>
  //   dispatch({
  //     type: 'ADD_TO_CART',
  //     payload: {
  //       ...item,
  //       restaurantName: restaurantName,
  //       checkboxValue: checkboxValue,
  //     },
  //   });

  // const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  // const isFoodInCart = (food, cartItems) =>
  //   Boolean(cartItems.find(item => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {/* {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={checkboxValue => selectItem(food, checkboxValue)}
              />
            )} */}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          {/* <Divider
            width={0.5}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          /> */}
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo: FC<{food: FoodsProps}> = ({food}) => (
  <View style={styles.foodInfo}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage: FC<{food: FoodsProps; marginLeft?: number}> = ({
  marginLeft,
  food,
}) => (
  <View>
    <Image
      source={{uri: food.image}}
      style={{
        ...styles.foodImage,
        marginLeft: marginLeft,
      }}
    />
  </View>
);

export default MenuItems;

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
  },
  foodInfo: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
