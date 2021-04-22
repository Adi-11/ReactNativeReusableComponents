import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {button} from '../helpers/snippets';
import {CustomButton} from './components/Buttons/Button';
import {PopupViewComponent} from './helperScreens/PopupViewComponent';

interface ButtonComponentScreenProps {
  navigation: StackNavigationProp<AppParamList, 'ButtonComponent'>;
}

interface ButtonComponentScreenState {
  image: ImageSourcePropType;
  modalVisisble: boolean;
  colorModalView: boolean;
}

const propsData = [
  'onPress: () => any',
  'width: string | number',
  'borderRadius: number',
  'text?: string',
  'textSize?: number',
  'textcolor?: string',
  'margin: number',
  'iconname?: string(fontawsome icons)',
  'iconsize?: number',
  'iconcolor?: string',
];
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
            icon={'format-color-fill'}
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
            color={'#a4c3f5'}
            height={60}
            borderRadius={5}
            text={'Load code snippet'}
            textSize={20}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'90%'}
            color={'#a4c3f5'}
            height={60}
            borderRadius={0}
            text={'Load code snippet'}
            textcolor={'black'}
            textSize={20}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'60%'}
            color={'#a4c3f5'}
            height={40}
            textcolor={'black'}
            borderRadius={10}
            text={'Load code snippet'}
            textSize={15}
            margin={10}
          />
          <CustomButton
            onpress={this.showModal}
            width={'60%'}
            color={'#a4c3f5'}
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
              color={'#a4c3f5'}
              height={40}
              borderRadius={50}
              margin={20}
              iconname={'github'}
              iconsize={40}
              iconcolor={'black'}
            />
            <CustomButton
              onpress={this.showModal}
              width={40}
              color={'#a4c3f5'}
              height={40}
              borderRadius={10}
              margin={20}
              iconname={'github'}
              iconsize={40}
              iconcolor={'black'}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CustomButton
              onpress={this.showModal}
              width={'40%'}
              color={'#a4c3f5'}
              height={40}
              borderRadius={10}
              text={'code'}
              textSize={20}
              margin={10}
            />
            <CustomButton
              onpress={this.showModal}
              width={'40%'}
              color={'#a4c3f5'}
              height={40}
              textcolor={'black'}
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
          propsData={propsData}
          image={require('../assets/snippet1.png')}
          copied={button}
        />
      </View>
    );
  }
}
