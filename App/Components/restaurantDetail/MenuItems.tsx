import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {FoodType} from '../../Models';

type Props = {
  restaurantName: string;
  foods: FoodType[];
  pushToAddToCart: (food: FoodType) => any;
  marginLeft?: number;
  hideCheckbox?: boolean;
};

const MenuItems: FC<Props> = ({foods, marginLeft, pushToAddToCart}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map(food => (
        <Pressable onPress={() => pushToAddToCart(food)}>
          <View key={food.id} style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const FoodInfo: FC<{food: FoodType}> = ({food}) => (
  <View style={styles.foodInfo}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage: FC<{food: FoodType; marginLeft?: number}> = ({
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
  image: {
    width: '100%',
    height: 180,
  },
  buttonAddToCart: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
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
