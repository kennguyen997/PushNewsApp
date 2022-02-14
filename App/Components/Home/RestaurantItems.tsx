import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {RestaurantType} from '../../Models';
import {RootStackParams} from '../../Navigation';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants: RestaurantType[] = [
  {
    id: '1',
    name: 'Beachside Bar',
    image:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: 15,
    reviews: 1244,
    rating: 4.5,
  },
  {
    id: '2',
    name: 'Benihana',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: 15,
    reviews: 1244,
    rating: 3.7,
  },
  {
    id: '3',
    name: "India's Grill",
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: 15,
    reviews: 700,
    rating: 4.9,
  },
];

interface PropRestaurantItems {
  restaurantData: RestaurantType[];
}

const RestaurantItems: FC<PropRestaurantItems> = ({restaurantData}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <>
      {restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={styles.restaurant}
          onPress={() => navigation.navigate('RestaurantDetail', restaurant)}>
          <View style={styles.mainRestaurent}>
            <RestaurantImage image={restaurant.image} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

interface PropRestaurantImage {
  image: string;
}

const RestaurantImage: FC<PropRestaurantImage> = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.subImage}>
      {/* <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" /> */}
    </TouchableOpacity>
  </>
);

interface PropRestaurant {
  rating: number;
  name: string;
}

const RestaurantInfo: FC<PropRestaurant> = props => (
  <View style={styles.restaurantInfo}>
    <View>
      <Text style={styles.restaurantName}>{props.name}</Text>
      <Text style={styles.restaurantTime}>30-45 • min</Text>
    </View>
    <View style={styles.restaurantRating}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

export default RestaurantItems;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  subImage: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  restaurantInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  restaurantTime: {
    fontSize: 13,
    color: 'gray',
  },
  restaurantRating: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  restaurant: {
    marginBottom: 30,
  },
  mainRestaurent: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
});
