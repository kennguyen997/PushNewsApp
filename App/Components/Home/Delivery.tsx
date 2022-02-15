import {ScrollView} from 'react-native';
import React, {FC} from 'react';
import hocHomeSection from '../../hoc/hocHomeSection';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FoodSmallItem from './FoodSmallItem';
import {FoodType} from '../../Models';
import {globalStyles} from '../../Utility/constants';

interface DeliveryProps {
  data: FoodType[];
}

const Delivery: FC<DeliveryProps> = ({data}) => {
  return (
    <ScrollView contentContainerStyle={globalStyles.appBg}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity key={index}>
            <FoodSmallItem data={item} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default hocHomeSection(Delivery, 'Free Delivery*');
