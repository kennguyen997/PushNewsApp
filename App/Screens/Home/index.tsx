import React, {FC, useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import HeaderTabs from './HeaderTab';
import SearchBarGG from './SearchBar';
import Restaurants from './Restaurants';
import Banner from './Banner';
import {dataFake} from '../../Utility/data';
import Delivery from './Delivery';
import {globalStyles} from '../../Utility/constants';
import Offers from './Offers';

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
        <Restaurants data={dataFake.restaurants} />
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
