import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {CustomButton} from './components/Buttons/Button';
import {PopupViewComponent} from './helperScreens/PopupViewComponent';

export const code: string = `
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
      <View style={{backgroundColor: '#0000', flex: 1}}>
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
            textcolor={'white'}
            textSize={20}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'60%'}
            color={'#4f75ab'}
            height={40}
            textcolor={'white'}
            borderRadius={10}
            text={'Load code snippet'}
            textSize={15}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'60%'}
            color={'#4f75ab'}
            height={40}
            textcolor={'black'}
            borderRadius={5}
            text={'Load code snippet'}
            textSize={15}
            margin={10}
          />
          <View style={{flexDirection: 'row'}}>
            <CustomButton
              onpress={this.showModal}
              width={40}
              color={'#4f75ab'}
              height={40}
              borderRadius={50}
              margin={20}
              iconname={'github'}
              iconsize={40}
              iconcolor={'white'}
            />
            <CustomButton
              onpress={this.showModal}
              width={40}
              color={'#4f75ab'}
              height={40}
              borderRadius={10}
              margin={20}
              iconname={'github'}
              iconsize={40}
              iconcolor={'white'}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomButton
              onpress={this.showModal}
              width={'40%'}
              color={'#4f75ab'}
              height={40}
              borderRadius={10}
              text={'code'}
              textSize={20}
              margin={10}
            />
            <CustomButton
              onpress={this.showModal}
              width={'40%'}
              color={'#4f75ab'}
              height={40}
              textcolor={'white'}
              borderRadius={5}
              text={'code'}
              textSize={20}
              margin={10}
            />
          </View>
        </View>
        <PopupViewComponent
          visible={this.state.modalVisisble}
          hidePopUp={this.hideModal}
        />
      </View>
    );
  }
}
