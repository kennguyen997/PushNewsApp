import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const AddToCart = () => {
  return (
    <SafeAreaView>
      {/* <TouchableOpacity
        onPress={() => setModalVisible(false)}
        style={{...styles.headerClose, top: insets.top + 10}}>
        <Icon size={15} onPress={() => setModalVisible(false)} name="close" />
      </TouchableOpacity> */}
      <Image
        source={{
          uri: 'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
        }}
        style={styles.image}
      />
      <View>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore minus
          amet officia alias dignissimos fugiat, optio itaque dolorem impedit
          expedita, molestiae ratione ipsum aperiam veritatis? Dolorem natus
          optio expedita soluta.
        </Text>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.buttonAddToCart}>
        <Text>addToCart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddToCart;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
  },
  headerClose: {
    position: 'absolute',
    left: 10,
    zIndex: 100,
    borderRadius: 50,
  },
  buttonAddToCart: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
