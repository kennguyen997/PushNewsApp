import React, {FC} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RootRouteProps} from '../../Navigation';
interface Props {
  route: RootRouteProps<'RestaurantDetail'>;
}
const About: FC<Props> = ({route}) => {
  const {name, image, price, reviews, rating, categories} = route.params;
  const formattedCategories = categories.map((cat: any) => cat).join(' • ');
  const description = `${formattedCategories} ${
    price ? ' • $' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage: FC<{image: string}> = props => (
  <Image source={{uri: props.image}} style={styles.image} />
);

const RestaurantName: FC<{name: string}> = props => (
  <Text style={styles.name}>{props.name}</Text>
);

const RestaurantDescription: FC<{description: string}> = props => (
  <Text style={styles.description}>{props.description}</Text>
);

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
