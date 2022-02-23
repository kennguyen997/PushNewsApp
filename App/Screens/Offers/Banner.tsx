import {View, ScrollView, StyleSheet} from 'react-native';
import React, {FC} from 'react';

const Banner: FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.item}>
        <View style={styles.contentItem} />
      </View>
      <View style={styles.item}>
        <View style={styles.contentItem} />
      </View>
      <View style={styles.item}>
        <View style={styles.contentItem} />
      </View>
    </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {},
  item: {
    height: 150,
    width: 250,
    padding: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  contentItem: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
