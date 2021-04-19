import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {color} from '../helpers/col';
import {CustomButton} from './components/Buttons/Button';
import {PopupViewComponent} from './helperScreens/PopupViewComponent';

export const code: string = `
<View style={{width: \'100%\'}}>
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
</View>`;
interface ButtonComponentScreenProps {
  navigation: StackNavigationProp<AppParamList, 'ButtonComponent'>;
}

interface ButtonComponentScreenState {
  image: ImageSourcePropType;
  modalVisisble: boolean;
  colorModalView: boolean;
}
export class ButtonComponentScreen extends Component<
  ButtonComponentScreenProps,
  ButtonComponentScreenState
> {
  constructor(props: ButtonComponentScreenProps) {
    super(props);
    this.state = {
      image: require('../assets/code.png') as ImageSourcePropType,
      modalVisisble: false,
      colorModalView: true,
    };
  }
  hideModal = () => {
    this.setState({
      modalVisisble: false,
    });
  };
  showModal = () => {
    this.setState({
      modalVisisble: true,
    });
  };

  render() {
    return (
      <View style={{backgroundColor: '#c7d0ed', flex: 1}}>
        <Appbar.Header style={{marginLeft: 10}}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content title="Button Component" />
          <Appbar.Action
            icon={'invert-colors'}
            onPress={() => this.props.navigation.navigate('MasterColors')}
          />
        </Appbar.Header>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomButton
            onpress={this.showModal}
            width={'90%'}
            color={'#4f75ab'}
            height={60}
            borderRadius={5}
            text={'Load code snippet'}
            textSize={20}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'90%'}
            color={'#4f75ab'}
            height={60}
            borderRadius={0}
            text={'Load code snippet'}
            textcolor={'#c7d0ed'}
            textSize={20}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'60%'}
            color={'#4f75ab'}
            height={40}
            textcolor={'white'}
            borderRadius={20}
            text={'Load code snippet'}
            textSize={15}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'60%'}
            color={'#4f75ab'}
            height={40}
            textcolor={'white'}
            borderRadius={5}
            text={'Load code snippet'}
            textSize={15}
            margin={10}
          />
          <View style={{flexDirection: 'row'}}>
            <CustomButton
              onpress={this.showModal}
              width={70}
              color={'#4f75ab'}
              height={70}
              borderRadius={50}
              margin={10}
              iconname={'github'}
              iconsize={55}
              iconcolor={'white'}
            />
            <CustomButton
              onpress={this.showModal}
              width={70}
              color={'#4f75ab'}
              height={70}
              borderRadius={10}
              margin={10}
              iconname={'github'}
              iconsize={55}
              iconcolor={'white'}
            />
          </View>
          <CustomButton
            onpress={this.showModal}
            width={'40%'}
            color={'#4f75ab'}
            height={40}
            borderRadius={50}
            text={' '}
            textSize={20}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'40%'}
            color={'#4f75ab'}
            height={40}
            borderRadius={10}
            text={' '}
            textSize={20}
            margin={10}
          />
        </View>
        <PopupViewComponent
          visible={this.state.modalVisisble}
          hidePopUp={this.hideModal}
        />
      </View>
    );
  }
}
