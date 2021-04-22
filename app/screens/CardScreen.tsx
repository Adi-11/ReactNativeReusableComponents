import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {Dimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {card} from '../helpers/snippets';
import {CustomButton} from './components/Buttons/Button';
import {CustomCards} from './components/cards/Cards';
import {PopupViewComponent} from './helperScreens/PopupViewComponent';
const {width, height} = Dimensions.get('window');
interface CardScreenProps {
  navigation: StackNavigationProp<AppParamList, 'CardComponent'>;
}

interface CardScreenState {
  modalVisisble: boolean;
  colorModalView: boolean;
}

const cardProps = [
  'cardHeight: number',
  'cardBorderRadius: number',
  'cardWidth: string | number',
  'CardImageUri?: string',
  'cardBackgroundColor?: string',
  'imageBorderRadius: number',
  'titleText: string',
  'titleTextSize: number',
  'titleTextColor: string',
  'descText: string',
  'descTextSize: number',
  'descTextColor: string',
  'reverse?: boolean',
];

export class CardScreen extends Component<CardScreenProps, CardScreenState> {
  constructor(props: CardScreenProps) {
    super(props);
    this.state = {
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
      <View style={{flex: 1}}>
        <Appbar.Header style={{marginLeft: 10}}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content title="Card Component" />
          <Appbar.Action
            icon={'format-color-fill'}
            onPress={() => this.props.navigation.navigate('MasterColors')}
          />
        </Appbar.Header>
        <ScrollView
          style={{paddingTop: 30}}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            bottom: 20,
          }}>
          <CustomCards
            cardBackgroundColor={'#e8e8e8'}
            cardHeight={210}
            cardWidth={'90%'}
            cardBorderRadius={5}
            titleText={'Save Water Save Life'}
            titleTextColor={'black'}
            titleTextSize={18}
            descText={
              'To wash a Car without using technology and expertise a person would require above 30 Litres of water. Yawlit uses technology and training to reduce the excess wastage of water.'
            }
            descTextColor={'black'}
            descTextSize={14}
            imageBorderRadius={20}
            CardImageUri={require('../assets/water.png')}
            reverse={false}>
            <CustomButton
              onpress={() => this.showModal()}
              width={'60%'}
              color={'rgba(145, 187, 255, 0.5)'}
              height={40}
              textcolor={'black'}
              borderRadius={10}
              text={'Load code snippet'}
              textSize={15}
              margin={10}
            />
          </CustomCards>
          <CustomCards
            cardBackgroundColor={'#e8e8e8'}
            cardHeight={220}
            cardWidth={'90%'}
            cardBorderRadius={5}
            titleText={'Clean Healthy Environment and You'}
            titleTextColor={'black'}
            titleTextSize={18}
            descText={
              'Filthier than the average toilet and harboring a horde of spiteful germs, vehicular hygiene is the focal point of our testament to revolutionize this passive automobile industry and ensure a pristine driving experience to our patrons'
            }
            reverse={true}
            descTextColor={'black'}
            descTextSize={14}
            imageBorderRadius={20}
            CardImageUri={require('../assets/clean.png')}>
            <CustomButton
              onpress={() => this.showModal()}
              width={'60%'}
              color={'rgba(145, 187, 255, 0.5)'}
              height={40}
              textcolor={'black'}
              borderRadius={10}
              text={'Load code snippet'}
              textSize={15}
              margin={10}
            />
          </CustomCards>
        </ScrollView>
        <PopupViewComponent
          image={require('../assets/snippet2.png')}
          hidePopUp={this.hideModal}
          propsData={cardProps}
          visible={this.state.modalVisisble}
          copied={card}
        />
      </View>
    );
  }
}
