import React, {Component} from 'react';
import {Image, Text, ToastAndroid, View} from 'react-native';
import {Portal, Dialog, Button} from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import {code} from '../ButtonComponentScreen';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../../helpers/masterColor';
import {ColorScreenList} from './ColorScreenList';
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
        <Dialog
          visible={this.props.visible}
          onDismiss={this.props.hidePopUp}
          style={{backgroundColor: '#e6ebff', maxHeight: 400}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button
                contentStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                }}
                icon="content-copy"
                onPress={() => {
                  Clipboard.setString(code);
                  this.showToastWithGravityAndOffset();
                }}
                style={{
                  alignItems: 'center',
                }}
                mode="text">
                Copy
              </Button>
              <Button
                onPress={this.props.hidePopUp}
                mode="text"
                icon="close"
                style={{margin: 0, padding: 0, alignItems: 'center'}}>
                Close
              </Button>
            </View>
            <Image
              source={require('../../assets/snippet1.png')}
              resizeMode="stretch"
              style={{
                padding: 0,
                margin: 0,
                height: 290,
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
            <View style={{marginTop: 0, marginBottom: 10}}>
              <View
                style={{
                  alignItems: 'center',
                  padding: 5,
                }}>
                <Text style={{textTransform: 'uppercase'}}>Required Props</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  margin: 10,
                }}>
                {propsData.map((item, idx) => (
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: idx % 2 == 0 ? '#ebeefc' : '#0000',
                      borderRadius: 2,
                      height: 25,
                      justifyContent: 'center',
                    }}
                    key={idx}>
                    <Text style={{marginLeft: 5}}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </Dialog>
      </Portal>
    );
  }
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
