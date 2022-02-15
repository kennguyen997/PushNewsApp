import React, {FC} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {FoodType} from '../../Models';
interface Prop {
  restaurantName: string;
  foods: FoodType[];
  hideCheckbox?: boolean;
  marginLeft?: number;
}

const MenuItems: FC<Prop> = ({foods, marginLeft}) => {
  return (
    // <View style={{flex: 1}}>
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map(food => (
        <View key={food.id} style={styles.menuItemStyle}>
          <FoodInfo food={food} />
          <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
        </View>
      ))}
    </ScrollView>
    // </View>
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
