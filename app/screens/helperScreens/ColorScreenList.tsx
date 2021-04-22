import Clipboard from '@react-native-clipboard/clipboard';
import React, {Component} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';

interface ColorScreenListProps {
  id?: string;
  borderColor: string;
  colorName: string;
  showToast: () => any;
}

export class ColorScreenList extends Component<ColorScreenListProps, {}> {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          Clipboard.setString(this.props.borderColor);
          this.props.showToast();
        }}>
        <View
          key={this.props.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '85%',
            margin: 10,
            marginLeft: 20,
            height: 45,
            borderRadius: 5,
            borderColor: this.props.borderColor,
            borderWidth: 3,
            borderLeftWidth: 20,
          }}>
          <Text
            style={{
              flex: 1.2,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10,
            }}>
            {this.props.borderColor}
          </Text>
          <Text
            style={{
              flex: 1.5,
              flexDirection: 'row',
              paddingLeft: 20,
              width: '100%',
            }}>
            {this.props.colorName}
          </Text>
          <Button
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              width: '100%',
            }}
            icon="content-copy"
            onPress={() => {
              Clipboard.setString(this.props.borderColor);
              this.props.showToast();
            }}>
            {}
          </Button>
        </View>
      </TouchableOpacity>
    );
  }
}
