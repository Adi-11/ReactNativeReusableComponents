import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component, createRef} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {IconButton, Text, TextInput} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {HeaderComponent} from './helperScreens/HeaderComponent';
import {CustomButton} from './components/Buttons/Button';
interface FormsScreenProps {
  navigation: StackNavigationProp<AppParamList, 'FromsComponent'>;
}

interface FormsScreenState {}

export class FormsScreen extends Component<FormsScreenProps, FormsScreenState> {
  pin1Ref: React.RefObject<any>;
  pin2Ref: React.RefObject<any>;
  pin3Ref: React.RefObject<any>;
  pin4Ref: React.RefObject<any>;
  constructor(props: FormsScreenProps) {
    super(props);
    this.state = {
      colors: [],
    };
    this.pin1Ref = createRef();
    this.pin2Ref = createRef();
    this.pin3Ref = createRef();
    this.pin4Ref = createRef();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderComponent
          componentName={'Froms Component'}
          navigation={this.props.navigation}
        />
        <ScrollView>
          <View style={styles.background}>
            <View style={styles.emailInput}>
              <IconButton icon="cellphone-android" size={25} />
              <TextInput
                style={[styles.inputText]}
                placeholder="Mobile Number"
                keyboardType="phone-pad"
                maxLength={10}
              />
            </View>
            <View style={styles.pinTextView}>
              <Text style={{fontSize: 20}}>Enter 4 digit PIN</Text>
            </View>
            <View style={styles.pinInputView}>
              <TextInput
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                textContentType="password"
                style={styles.pinInputArea}
                ref={this.pin1Ref}
                onChangeText={p => {
                  if (this.pin2Ref?.current) {
                    this.pin2Ref?.current.focus();
                  }
                }}
              />
              <TextInput
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                textContentType="password"
                style={styles.pinInputArea}
                ref={this.pin2Ref}
                onChangeText={p => {
                  if (this.pin3Ref?.current) {
                    this.pin3Ref?.current.focus();
                  }
                }}
              />
              <TextInput
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                textContentType="password"
                style={styles.pinInputArea}
                ref={this.pin3Ref}
                onChangeText={p => {
                  if (this.pin4Ref?.current) {
                    this.pin4Ref?.current.focus();
                  }
                }}
              />
              <TextInput
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry={true}
                textContentType="password"
                style={styles.pinInputArea}
                ref={this.pin4Ref}
                onChangeText={p => {
                  console.log('Done!');
                }}
              />
            </View>

            <View style={styles.loginBtnView}>
              <CustomButton
                onpress={() => {
                  console.log('hello');
                }}
                width={'60%'}
                color={'rgba(145, 187, 255, 0.5)'}
                height={40}
                textcolor={'white'}
                borderRadius={10}
                text={'Login'}
                textSize={15}
                margin={10}
              />

              <CustomButton
                onpress={() => {
                  console.log('hello');
                }}
                width={'60%'}
                color={'rgba(145, 187, 255, 0.5)'}
                height={40}
                textcolor={'white'}
                borderRadius={10}
                text={'Register'}
                textSize={15}
                margin={10}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    marginTop: 20,
    paddingHorizontal: 15,
    borderRadius: 23,
    paddingVertical: 20,
  },

  loginBtnView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
  },
  inputText: {
    width: '100%',
  },
  pinTextView: {
    margin: 20,
  },
  pinInputView: {
    flex: 0.3,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '80%',
  },
  pinInputArea: {
    textAlign: 'center',
    fontSize: 40,
  },
});
