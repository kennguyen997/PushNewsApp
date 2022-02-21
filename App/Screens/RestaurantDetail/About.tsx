import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {RestaurantType} from '../../Models';
import {Text} from '../../Utility';

interface AboutProps {
  data: RestaurantType;
}

const About: FC<AboutProps> = ({data}) => {
  const {name, image, price, reviews, rating, categories} = data;
  const formattedCategories = categories.map((cat: any) => cat).join(' • ');
  const description = `${formattedCategories} ${
    price ? ' • $' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  name: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
  description: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
});
