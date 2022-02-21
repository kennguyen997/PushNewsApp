import React, {Component, ComponentType} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Sleep} from '../Utility';
import {DotIndicator} from 'react-native-indicators';

export interface LoadingType {
  onLoadingStart: () => void;
  onLoadingStop: () => void;
}

interface HocComponentStateType {
  isShow: boolean;
}

export default (WrappedComponent: ComponentType<any>) => {
  class HocComponent extends Component<any, HocComponentStateType> {
    constructor(props: any) {
      super(props);
      this.state = {isShow: false};
    }

    _onLoadingStop = async () => {
      await Sleep(1000);
      this.setState({...this.state, isShow: false});
    };

    _onLoadingStart = () => {
      this.setState({...this.state, isShow: true});
    };

    render() {
      const events: LoadingType = {
        onLoadingStart: this._onLoadingStart,
        onLoadingStop: this._onLoadingStop,
      };
      return (
        <>
          <WrappedComponent {...this.props} {...events} />
          {this.state.isShow && (
            <View style={[styles.positionFull, styles.container]}>
              <View style={[styles.positionFull, styles.shadow]} />
              <Image source={require('../assets/images/logo.png')} />
              <View style={styles.indicator}>
                <DotIndicator count={5} size={15} color="#fff" />
              </View>
            </View>
          )}
        </>
      );
    }
  }
  return HocComponent;
};

const styles = StyleSheet.create({
  positionFull: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    backgroundColor: '#000',
    opacity: 0.8,
  },
  indicator: {
    height: 50,
    paddingTop: 20,
  },
});
