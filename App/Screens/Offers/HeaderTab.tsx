import React, {FC} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Prop {
  activeTab: any;
  setActiveTab: any;
}

const HeaderTabs: FC<Prop> = props => {
  return (
    <View style={styles.header}>
      <HeaderButton
        text="Restaurants"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Promos"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

interface PropButton {
  activeTab: any;
  text: string;
  setActiveTab: any;
  btnColor: string;
  textColor: string;
}

const HeaderButton: FC<PropButton> = props => (
  <TouchableOpacity
    style={[
      styles.headerButton,
      props.activeTab === props.text && styles.activeBtn,
    ]}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={[
        styles.textBtn,
        props.activeTab === props.text && styles.activeText,
      ]}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

export default HeaderTabs;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  headerButton: {
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  textBtn: {
    fontSize: 15,
    fontWeight: '900',
    color: 'black',
  },
  activeBtn: {
    backgroundColor: 'black',
  },
  activeText: {
    color: 'white',
  },
});
