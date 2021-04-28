import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component, PureComponent} from 'react';
import {ToastAndroid, View, FlatList} from 'react-native';
import {Appbar} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {COLORS} from '../helpers/masterColor';
import {ColorScreenList} from './helperScreens/ColorScreenList';
import {Appstyle} from '../screens/components/Buttons/Button.style';
interface ColorScreenProps {
  navigation: StackNavigationProp<AppParamList, 'ButtonComponent'>;
}

interface ColorScreenState {
  colors: any[];
}

export class ColorScreen extends PureComponent<
  ColorScreenProps,
  ColorScreenState
> {
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
      <View style={{backgroundColor: '#0000'}}>
        <Appbar.Header style={Appstyle.buttonScreenAppHeader}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content title="Color Picker" />
        </Appbar.Header>
        <View>
          <FlatList
            contentContainerStyle={Appstyle.buttonScreenFlatList}
            data={COLORS}
            keyExtractor={item => item.colorname}
            renderItem={({item}) => (
              <ColorScreenList
                key={item.colorname}
                id={item.colorcode}
                borderColor={item.colorcode}
                colorName={item.colorname}
                showToast={this.showToastWithGravityAndOffset}
              />
            )}
            initialNumToRender={10}
            removeClippedSubviews={true}
            maxToRenderPerBatch={8}
            updateCellsBatchingPeriod={10}
            getItemLayout={(date, index) => ({
              length: 45,
              offset: 45 * index,
              index,
            })}
          />
        </View>
      </View>
    );
  }
}
