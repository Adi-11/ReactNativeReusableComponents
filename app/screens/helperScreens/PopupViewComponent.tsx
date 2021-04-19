import React, {Component} from 'react';
import {Image, Text, ToastAndroid, View} from 'react-native';
import {Portal, Dialog, Button} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import {code} from '../ButtonComponentScreen';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../helpers/masterColor';
import {ColorScreenList} from './ColorScreenList';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
// import {docco} from 'react-syntax-highlighter/styles/hljs';
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
    const codeString = '(num) => num + 1';
    return (
      <Portal>
        <Dialog
          visible={this.props.visible}
          onDismiss={this.props.hidePopUp}
          style={{backgroundColor: '#e6ebff', maxHeight: 400}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              padding: 5,
              fontSize: 20,
              backgroundColor: '#b4bdd9',
              width: '100%',
            }}>
            Code for component
          </Text>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: 0,
              }}>
              <Button
                icon="content-copy"
                onPress={() => {
                  Clipboard.setString(code);
                  this.showToastWithGravityAndOffset();
                }}
                style={{margin: 'auto', padding: 0, alignItems: 'center'}}
                mode="text">
                {}
              </Button>
              <Button
                onPress={this.props.hidePopUp}
                mode="text"
                icon="close"
                style={{margin: 0, padding: 0, alignItems: 'center'}}>
                {}
              </Button>
            </View>
            <Image
              source={require('../../assets/code.png')}
              resizeMode="stretch"
              style={{
                padding: 0,
                margin: 0,
                height: 200,
                width: '100%',
              }}
            />
            <View style={{width: '100%'}}>
              <ColorScreenList
                colorName={'BtnColor'}
                showToast={this.showToastWithGravityAndOffset}
                borderColor={COLORS[0].BtnColor as string}
              />
            </View>
            <View>
              <View
                style={{
                  alignItems: 'center',
                  padding: 5,
                }}>
                <Text>Required Props</Text>
              </View>
            </View>
          </ScrollView>
        </Dialog>
      </Portal>
    );
  }
}
