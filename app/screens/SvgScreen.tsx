import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, TextInput} from 'react-native';
import SVG, {G, Circle} from 'react-native-svg';
import {AppParamList} from '../helpers/AppParamList';
import {HeaderComponent} from './helperScreens/HeaderComponent';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimateInput = Animated.createAnimatedComponent(TextInput);

interface SvgScreenProps {
  percentage: number;
  radius: number;
  strokeWidth: number;
  duration: number;
  color: string;
  delay: number;
  textColor: string;
  max: number;
  navigation: StackNavigationProp<AppParamList, 'SVGComponent'>;
}

export const SvgScreen: React.FC<SvgScreenProps> = ({
  percentage = 75,
  radius = 70,
  strokeWidth = 10,
  duration = 500,
  color = '#e8e8e8',
  delay = 500,
  textColor,
  max = 100,
  navigation,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const halfCircle = radius + strokeWidth;
  const circleRef = useRef();
  const inputRef = useRef();
  const circumference = Math.PI * 2 * radius;
  const animation = (toValue: number): any => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };
  useEffect(() => {
    animation(percentage);

    animatedValue.addListener(e => {
      const maxPercent = (100 * percentage) / max;
      const strokeDashoffset = circumference - (circumference * e.value) / 100;
      if (circleRef?.current) {
        (circleRef as any).current.setNativeProps({
          strokeDashoffset,
        });
      }

      if (inputRef?.current) {
        (inputRef as any).current.setNativeProps({
          text: `${Math.round(e.value)}`,
        });
      }
    });
    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View style={{flex: 1}}>
      <HeaderComponent
        navigation={navigation}
        componentName={'SVG Cpmponent'}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: radius * 2, height: radius * 2}}>
          <SVG
            width={radius * 2}
            height={radius * 2}
            viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
            <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
              <Circle
                cx="50%"
                cy="50%"
                stroke={color}
                strokeWidth={strokeWidth}
                r={radius}
                opacity={0.6}
              />
              <AnimatedCircle
                fill={'red'}
                fillRule={'evenodd'}
                ref={circleRef}
                cx="50%"
                cy="50%"
                stroke={color}
                strokeWidth={strokeWidth}
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                strokeLinecap="round"
              />
            </G>
          </SVG>
          <AnimateInput
            ref={inputRef}
            underlineColorAndroid="transparent"
            editable={false}
            defaultValue="0"
            style={[
              StyleSheet.absoluteFillObject,
              {fontSize: radius / 2, color: textColor ?? color},
              {textAlign: 'center'},
            ]}
          />
        </View>
      </View>
    </View>
  );
};
