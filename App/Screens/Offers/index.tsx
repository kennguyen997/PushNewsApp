import React, {FC, useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import HeaderTabs from './HeaderTab';
import SearchBarGG from './SearchBar';
import Restaurants from './Restaurants';
import Banner from './Banner';
import {dataFake} from '../../Utility/data';
import Delivery from './Delivery';
import {globalStyles} from '../../Utility/constants';
import AllOffers from './AllOffers';
import hocLoading, {LoadingType} from '../../hoc/hocLoading';

type Props = {} & LoadingType;

const Offers: FC<Props> = props => {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [city, setCity] = useState('San Francisco');
  console.log(city);

  useEffect(() => {
    props.onLoadingStop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <AllOffers data={dataFake.foods} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default hocLoading(Offers);

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
