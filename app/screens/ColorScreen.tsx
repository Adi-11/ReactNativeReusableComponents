import Clipboard from '@react-native-clipboard/clipboard';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {
  GestureResponderEvent,
  Text,
  ToastAndroid,
  View,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar, Button} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {COLORS} from '../helpers/masterColor';
import {ColorScreenList} from './helperScreens/ColorScreenList';

interface ColorScreenProps {
  navigation: StackNavigationProp<AppParamList, 'ButtonComponent'>;
}

interface ColorScreenState {
  colors: any[];
}

export class ColorScreen extends Component<ColorScreenProps, ColorScreenState> {
  setColor: React.RefObject<any>;

  constructor(props: ColorScreenProps) {
    super(props);
    this.state = {
      colors: [],
    };
    this.setColor = React.createRef();
  }

  componentDidMount() {}
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
      <View style={{backgroundColor: '#c7d0ed'}}>
        <Appbar.Header
          style={{marginLeft: 10, marginBottom: 0, paddingBottom: 0}}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content title="Color Picker" />
        </Appbar.Header>
        <View style={{marginTop: 0}}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 0,
              marginTop: 90,
              bottom: 90,
              backgroundColor: '#c7d0ed',
            }}
            data={COLORS}
            keyExtractor={item => item.id as string}
            renderItem={({item}) => (
              <ColorScreenList
                id={item.id as string}
                borderColor={Object.values(item)[0] as string}
                colorName={Object.keys(item)[0] as string}
                showToast={this.showToastWithGravityAndOffset}
              />
            )}
            initialNumToRender={12}
            removeClippedSubviews={true}
            maxToRenderPerBatch={8}
          />
        </View>
      </View>
    );
  }
}
