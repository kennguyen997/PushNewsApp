import React, {FC, useState} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import {OrderStyle} from '../../Models';
import OrderItem from './OrderItem';

interface Prop {
  order: OrderStyle;
}

const ViewCart: FC<Prop> = ({order}) => {
  const {restaurent, carts} = order;
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const total = carts
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurent.name}</Text>
            {carts.map((item, index) => (
              <OrderItem key={index} cart={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text {...restaurent}>{totalUSD}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.btnCheckout}
                onPress={() => setLoading(true)}
                // onPress={() => {
                //   addOrderToFireBase();
                //   setModalVisible(false);
                // }}
              >
                <Text style={styles.textCheckout}>Checkout</Text>
                <Text style={styles.textTotalCheckout}>
                  {total ? totalUSD : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.total}>
          <View style={styles.mainTotal}>
            <TouchableOpacity
              style={styles.buttonTotal}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textTotal}>View Cart</Text>
              <Text style={styles.dataTotal}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View style={styles.loadingView}>
          {/* <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          /> */}
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
  total: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 130,
    zIndex: 999,
  },
  mainTotal: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  buttonTotal: {
    marginTop: 20,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  textTotal: {
    color: 'white',
    fontSize: 20,
    marginRight: 30,
  },
  dataTotal: {
    color: 'white',
    fontSize: 20,
  },
  loadingView: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  btnCheckout: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  textCheckout: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textTotalCheckout: {
    position: 'absolute',
    right: 20,
    color: 'white',
    fontSize: 15,
    top: 17,
  },
});
