import {Image, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {FoodType} from '../../Models';
import {constants, Text} from '../../Utility';

interface Props {
  data: FoodType;
}

const FoodSmallItem: FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: data.image}} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {data.title}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {data.description}
        </Text>
        <View>
          <Text>{data.rating}</Text>
          <Text>{data.waitingTime} mins</Text>
        </View>
        <Text>$ {data.price}</Text>
      </View>
    </View>
  );
};

export default FoodSmallItem;

const widthImgItem = constants.windowWidth / 4;
const heightImgItem = (widthImgItem * 5) / 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    borderColor: constants.colorGray,
    borderWidth: 1,
    borderRadius: 15,
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
  },
  img: {
    width: widthImgItem,
    height: heightImgItem,
    borderRadius: 15,
  },
  title: {
    flex: 1,
    fontWeight: '700',
    fontSize: 20,
  },
  description: {
    flex: 1,
  },
});
