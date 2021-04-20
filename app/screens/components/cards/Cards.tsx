import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacityBase,
  View,
} from 'react-native';
import {IMAGE_SIZE, SPACING} from '../../../helpers/constants';
import {CustomButton} from '../Buttons/Button';

interface CardsProps {
  onPress: () => any;
  cardHeight: number;
  cardWidth: string | number;
  cardBorderRadius: number;
  CardImageUri?: string;
  cardBackgroundColor?: string;
  isCoverdImage: boolean;
  imageBorderRadius: number;
  titleText: string;
  titleTextSize: number;
  titleTextColor: string;
  blurRaduis?: number;
  descText: string;
  descTextSize: number;
  descTextColor: string;
  type: string;
  buttonProps?: {
    onPress: () => any;
    width: number | string;
    height: number;
    btnText: string;
    textSize: number;
    color: string;
    margin: number;
    borderRadius: number;
  };
}

interface CardsState {}

export class CustomCards extends Component<CardsProps, CardsState> {
  render() {
    return (
      <View
        style={{
          flexDirection: this.props.type === 'row' ? 'row' : 'column',
          padding: SPACING,
          borderRadius: this.props.cardBorderRadius,
          width: this.props.cardWidth,
          backgroundColor: this.props.cardBackgroundColor || '#0000',
          marginBottom: SPACING,
          height: this.props.cardHeight,
        }}>
        <Image
          style={[
            this.props.isCoverdImage && StyleSheet.absoluteFillObject,
            {
              borderRadius: this.props.imageBorderRadius,
            },
            !this.props.isCoverdImage && {
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              marginTop: IMAGE_SIZE / 2,
              marginRight: SPACING / 2,
            },
          ]}
          source={{
            uri: this.props.CardImageUri,
          }}
          blurRadius={this.props.blurRaduis ? this.props.blurRaduis : 0}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: this.props.titleTextSize,
              color: this.props.titleTextColor,
              fontWeight: '600',
              marginBottom: 10,
            }}>
            {this.props.titleText}
          </Text>
          <Text
            style={{
              fontSize: this.props.descTextSize,
              textAlignVertical: 'top',
              color: this.props.descTextColor,
            }}
            numberOfLines={2}>
            {this.props.descText}
          </Text>

          <CustomButton
            onpress={() => this.props.buttonProps?.onPress()}
            width={this.props.buttonProps?.width!}
            height={this.props.buttonProps?.height!}
            text={this.props.buttonProps?.btnText!}
            margin={this.props.buttonProps?.margin!}
            textSize={this.props.buttonProps?.textSize}
            color={this.props.buttonProps?.color!}
            borderRadius={this.props.buttonProps?.borderRadius!}
          />
        </View>
      </View>
    );
  }
}
