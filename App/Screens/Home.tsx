import React, {FC, useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import HeaderTabs from '../Components/Home/HeaderTab';
import SearchBarGG from '../Components/Home/SearchBar';
import RestaurantItems from '../Components/Home/RestaurantItems';
import Banner from '../Components/Home/Banner';
import {dataFake} from '../Utility/data';
import Delivery from '../Components/Home/Delivery';
import {globalStyles} from '../Utility/constants';
import Offers from '../Components/Home/Offers';

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={globalStyles.appBg}>
        <Banner />
        <RestaurantItems data={dataFake.restaurants} />
        <Delivery data={dataFake.foods} />
        <Offers data={dataFake.foods} />
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
