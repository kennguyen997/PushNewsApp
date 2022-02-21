import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import hocHomeSection from '../../hoc/hocHomeSection';
import {FoodType} from '../../Models';
import FoodSmallItem from '../../Components/FoodSmallItem';

interface Props {
  data: FoodType[];
}

const Offers: FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <TouchableOpacity key={index}>
          <FoodSmallItem data={item} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default hocHomeSection(Offers, 'All Offers');

const styles = StyleSheet.create({
  container: {},
});
