import React, {FC, useState} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import BottomTabs from '../Components/Home/BottomTabs';
import Categories from '../Components/Home/Categories';
import HeaderTabs from '../Components/Home/HeaderTab';
import RestaurantItems, {
  localRestaurants,
} from '../Components/Home/RestaurantItems';

const Home: FC = () => {
  const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <SafeAreaView style={styles.mainArea}>
      <View style={styles.header}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* <SearchBar cityHandler={setCity} /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={localRestaurants} />
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTabs />
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
