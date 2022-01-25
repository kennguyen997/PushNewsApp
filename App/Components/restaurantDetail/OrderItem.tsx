import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  item: {title: string; price: number};
}

const OrderItem: FC<Props> = ({item}) => {
  const {title, price} = item;
  return (
    <View style={styles.orderItem}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  price: {
    opacity: 0.7,
    fontSize: 16,
  },
});
