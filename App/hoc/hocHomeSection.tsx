import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../Utility/constants';

export default (WrappedComponent: any, title: string) => {
  const hocComponent = ({...props}) => (
    <View style={styles.container}>
      <Text style={[globalStyles.textColor, styles.text]}>{title}</Text>
      <WrappedComponent {...props} />
    </View>
  );
  return hocComponent;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 5,
  },
});
