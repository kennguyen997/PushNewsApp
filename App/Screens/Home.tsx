import React, {FC, useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import Categories from '../Components/Home/Categories';
import HeaderTabs from '../Components/Home/HeaderTab';
import SearchBarGG from '../Components/Home/SearchBar';
import RestaurantItems, {
  localRestaurants,
} from '../Components/Home/RestaurantItems';

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [city, setCity] = useState('San Francisco');
  console.log(city);
  return (
    <SafeAreaView style={styles.mainArea}>
      <View style={styles.header}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBarGG cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={localRestaurants} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainArea: {
    backgroundColor: '#eee',
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    padding: 15,
  },
});
