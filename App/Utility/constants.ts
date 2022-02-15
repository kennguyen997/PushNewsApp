import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const constants = {
  colorRed: '#ff0033',
  colorGray: '#cccccc',
  colorText: '#000000',

  windowWidth,
  windowHeight,
};

export const globalStyles = StyleSheet.create({
  textColor: {
    color: '#000000',
  },
  appBg: {
    backgroundColor: '#ffffff',
  },

  //box shadow
  shadow_1: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  shadow_2: {
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
