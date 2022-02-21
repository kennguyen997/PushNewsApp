import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {Component} from 'react';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ActivityIndicator size="small" color="#0000ff" /> */}
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
