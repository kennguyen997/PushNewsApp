import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import hocHomeSection from '../../hoc/hocHomeSection';
import {RestaurantType} from '../../Models';
import {RootStackParams} from '../../Navigation';
import {constants, globalStyles} from '../../Utility/constants';

interface Props {
  data: RestaurantType[];
}
type NavigationType = NativeStackNavigationProp<RootStackParams>;

const Restaurants: FC<Props> = ({data}) => {
  const navigation = useNavigation<NavigationType>();

  const _moveDetail = (item: RestaurantType) => {
    navigation.navigate('RestaurantDetail', {data: item});
  };

  return (
    <ScrollView
      horizontal
      style={styles.items}
      contentContainerStyle={globalStyles.appBg}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() => _moveDetail(item)}>
          <RestaurantItem data={item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default hocHomeSection(Restaurants, "Today's Offers");

// Restaurant item
interface RestaurantItemProp {
  data: RestaurantType;
}

const RestaurantItem: FC<RestaurantItemProp> = ({data}) => {
  return (
    <View style={[styles.item, globalStyles.shadow_2]}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.time}>30-45 • min</Text>
        </View>
        <View style={styles.restaurantRating}>
          <Text style={styles.rating}>{data.rating}</Text>
        </View>
      </View>
    </View>
  );
};

const widthItem = (constants.windowWidth / 13) * 9;
const heightItem = (widthItem * 5) / 6;

const styles = StyleSheet.create({
  items: {},
  item: {
    margin: 5,
    backgroundColor: 'white',
    height: heightItem,
    width: widthItem,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '75%',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
  },
  time: {
    fontSize: 13,
    color: 'gray',
  },
  rating: {},
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
});
