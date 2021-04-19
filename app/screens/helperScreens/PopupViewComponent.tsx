import React, {Component} from 'react';
import {Image, Text, ToastAndroid, View} from 'react-native';
import {Portal, Dialog, Button} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import {code} from '../ButtonComponentScreen';
import {color} from '../../helpers/col';
interface PopupViewComponentProps {
  visible: boolean;
  hidePopUp: () => void;
}

interface PopupViewComponentState {}

export class PopupViewComponent extends Component<
  PopupViewComponentProps,
  PopupViewComponentState
> {
  showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'Copied to clipboard',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  render() {
    return (
      <Portal>
        <Dialog visible={this.props.visible} onDismiss={this.props.hidePopUp}>
          <Dialog.Title
            style={{
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}>
            Code for component
          </Dialog.Title>
          <Dialog.Actions style={{justifyContent: 'space-evenly'}}>
            <Button
              icon="content-copy"
              onPress={() => {
                Clipboard.setString(code);
                this.showToastWithGravityAndOffset();
              }}
              mode="outlined"
              style={{margin: 20}}>
              {}
            </Button>
            <Button onPress={this.props.hidePopUp} mode="outlined" icon="close">
              {}
            </Button>
          </Dialog.Actions>
          <Image
            source={require('../../assets/code.png')}
            resizeMode="contain"
            style={{
              padding: 0,
              margin: 0,
              height: 200,
              width: '100%',
            }}
          />
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
    );
  }
}
