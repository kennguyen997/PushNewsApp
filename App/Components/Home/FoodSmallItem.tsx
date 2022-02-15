import {Image, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {FoodType} from '../../Models';
import {constants, Text} from '../../Utility';

interface Props {
  data: FoodType;
}

const FoodSmallItem: FC<Props> = ({data}) => {
  return (
    <View>
      <Image source={{uri: data.image}} style={styles.image} />
      <View>
        <Text>{data.title}</Text>
        <Text>{data.description}</Text>
        <View>
          <Text>{data.rating}</Text>
          <Text>{data.waitingTime} mins</Text>
        </View>
        <Text>$ {data.price}</Text>
      </View>
      <Text>FoodSmallItem</Text>
    </View>
  );
};

export default FoodSmallItem;

const widthImgItem = constants.windowWidth / 4;
const heightImgItem = (widthImgItem * 4) / 3;

const styles = StyleSheet.create({
  image: {
    width: widthImgItem,
    height: heightImgItem,
    borderRadius: 15,
  },
});
