import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from '../../../helpers/col';

interface ButtonProps {
  onpress: () => any;
}

interface ButtonState {}

export class CustomButton extends Component<ButtonProps, ButtonState> {
  render() {
    return (
      <View style={{width: '100%'}}>
        <TouchableOpacity onPress={this.props.onpress}>
          <View
            style={{
              backgroundColor: color.PRIMARY_COLOR,
              height: 60,
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20}}>
              Load code snipper
              {' </>'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
