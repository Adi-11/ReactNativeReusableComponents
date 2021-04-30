import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';

interface LoaderProps {}

interface LoaderState {}

export class Loader extends Component<LoaderProps, LoaderState> {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff0',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <LottieView
          style={{
            width: 150,
            aspectRatio: 150 / 300,
            flexGrow: 1,
            alignSelf: 'center',
            backgroundColor: '#eee',
          }}
          source={require('../../../assets/lottle.json')}
          autoPlay={true}
          loop={true}
        />
      </View>
    );
  }
}
