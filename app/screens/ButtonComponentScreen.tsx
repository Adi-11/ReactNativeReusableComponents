import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {ImageSourcePropType, View} from 'react-native';
import {Appbar} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {CustomButton} from './components/Buttons/Button';
import {PopupViewComponent} from './helperScreens/PopupViewComponent';

export const code: string = `
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
      <View>
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
            margin: 20,
          }}>
          <CustomButton onpress={this.showModal} />
        </View>
        <PopupViewComponent
          visible={this.state.modalVisisble}
          hidePopUp={this.hideModal}
        />
      </View>
    );
  }
}
