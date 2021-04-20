import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface CardScreenProps {}

interface CardScreenState {}

export class CardScreen extends Component<CardScreenProps, CardScreenState> {
  render() {
    return (
      <View>
        <Text>Hellow world</Text>
      </View>
    );
  }
}
