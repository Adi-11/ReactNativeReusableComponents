import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {
  ImageSourcePropType,
  View,
  Image,
  ToastAndroid,
  Text,
} from 'react-native';
import {Appbar, Dialog, Portal, Button, Banner} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {CustomButton} from './components/Buttons/Button';
import Clipboard from '@react-native-clipboard/clipboard';
import {color} from '../helpers/col';

interface ButtonComponentScreenProps {
  navigation: StackNavigationProp<AppParamList, 'ButtonComponent'>;
}

interface ButtonComponentScreenState {
  image: ImageSourcePropType;
  modalVisisble: boolean;
}
const code: string = `
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
export class ButtonComponentScreen extends Component<
  ButtonComponentScreenProps,
  ButtonComponentScreenState
> {
  constructor(props: ButtonComponentScreenProps) {
    super(props);
    this.state = {
      image: require('../assets/code.png') as ImageSourcePropType,
      modalVisisble: false,
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

  showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Snippet copied to clipboard',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  render() {
    return (
      <View>
        <Appbar.Header style={{marginLeft: 10}}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content title="Button Component" />
        </Appbar.Header>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: 20,
          }}>
          <CustomButton onpress={this.showModal} />
        </View>
        <Portal>
          <Dialog visible={this.state.modalVisisble} onDismiss={this.hideModal}>
            <Dialog.Title>Code for component</Dialog.Title>
            <Image
              source={require('../assets/code.png')}
              resizeMode="stretch"
              style={{
                padding: 0,
                height: 200,
                width: '100%',
              }}
            />

            <Dialog.Actions>
              <Button
                icon="content-copy"
                onPress={() => {
                  Clipboard.setString(code);
                  this.showToastWithGravityAndOffset();
                  this.hideModal;
                }}
                mode="outlined"
                style={{margin: 20}}>
                {}
              </Button>
              <Button onPress={this.hideModal} mode="outlined" icon="close">
                {}
              </Button>
            </Dialog.Actions>
            <Dialog.Content>
              <Text>color codes</Text>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={{backgroundColor: color.PRIMARY_COLOR}}>
                  #FFC107
                </Text>
                <Dialog.Actions>
                  <Button
                    icon="content-copy"
                    onPress={() => {
                      Clipboard.setString('#FFC107');
                      this.showToastWithGravityAndOffset();
                    }}>
                    {}
                  </Button>
                </Dialog.Actions>
              </View>
            </Dialog.Content>
          </Dialog>
        </Portal>
      </View>
    );
  }
}
