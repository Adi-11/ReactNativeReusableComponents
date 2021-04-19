import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
export interface ButtonProps {
  onpress: () => any;
  width: string | number; // in percent
  color: string;
  height: number;
  borderRadius: number;
  text?: string;
  textSize?: number;
  margin: number;
  iconname?: string;
  iconsize?: number;
  textcolor?: string;
  iconcolor?: string;
}

interface ButtonState {}

export class CustomButton extends Component<ButtonProps, ButtonState> {
  render() {
    return (
      <View style={{width: this.props.width, margin: this.props.margin}}>
        <TouchableOpacity onPress={this.props.onpress}>
          <View
            style={{
              backgroundColor: this.props.color,
              height: this.props.height,
              borderRadius: this.props.borderRadius,
              justifyContent: 'center',
            }}>
            {this.props.text && (
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: this.props.textSize,
                  color: this.props.textcolor ? this.props.textcolor : 'black',
                }}>
                {this.props.text + '</>'}
              </Text>
            )}
            {this.props.iconname && (
              <FontAwesomeIcons
                style={{alignSelf: 'center'}}
                name={this.props.iconname}
                size={this.props.iconsize}
                color={this.props.iconcolor}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
