import {ScrollView, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import hocHomeSection from '../../hoc/hocHomeSection';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FoodSmallItem from '../../Components/FoodSmallItem';
import {FoodType} from '../../Models';
import {constants, globalStyles} from '../../Utility/constants';

interface Props {
  data: FoodType[];
}

const Delivery: FC<Props> = ({data}) => {
  const dataToArrayRender = (params: FoodType[]) => {
    let i = 0;
    let loop = true;
    let temp: Array<FoodType[]> = [];
    while (loop) {
      if (i % 2 === 0 && i < params.length && i + 2 <= params.length) {
        temp.push([params[i], params[i + 1]]);
        i += 2;
      } else if (i + 1 === params.length) {
        temp.push([params[i]]);
        loop = false;
      } else {
        loop = false;
      }
    }
    // console.log(temp);
    return temp;
  };

  const _render = () => {
    const temp = dataToArrayRender(data);
    return temp.map((section, index) => {
      return (
        <View key={index}>
          {section.map((item, idx) => (
            <TouchableOpacity style={styles.item} key={idx}>
              <FoodSmallItem data={item} />
            </TouchableOpacity>
          ))}
        </View>
      );
    });
  };

  return (
    <ScrollView horizontal contentContainerStyle={globalStyles.appBg}>
      {_render()}
    </ScrollView>
  );
};

export default hocHomeSection(Delivery, 'Free Delivery*');

const styles = StyleSheet.create({
  item: {
    width: constants.windowWidth - 60,
  },
});
