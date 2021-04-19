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

  componentDidMount() {
    // this.setState({
    //   colors: COLORS,
    // });
    // console.log(this.state.colors);
  }
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
      <>
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
              paddingTop: 0,
              marginTop: 90,
              bottom: 90,
              backgroundColor: '#b4c0e0',
            }}
            data={COLORS}
            keyExtractor={item => item.id as string}
            renderItem={({item}) => (
              <View
                key={item.id as string}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '90%',
                  margin: 10,
                  height: 40,
                  borderRadius: 10,
                  paddingLeft: 20,
                  borderColor: `${Object.values(item)[0] as string}`,
                  borderWidth: 1,
                  borderLeftWidth: 10,
                }}>
                <Text
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  {Object.keys(item)[0] as string}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    paddingLeft: 20,
                  }}
                  ref={this.setColor}>
                  {Object.values(item)[0] as string}
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
                    Clipboard.setString(Object.values(item)[0] as string);
                    console.log(Object.values(item)[0] as string);
                    this.showToastWithGravityAndOffset();
                  }}>
                  {}
                </Button>
              </View>
            )}
            initialNumToRender={12}
            removeClippedSubviews={true}
            maxToRenderPerBatch={8}
          />
        </View>
      </>
    );
  }
}
