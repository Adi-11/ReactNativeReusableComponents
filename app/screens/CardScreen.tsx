import {StackNavigationProp} from '@react-navigation/stack';
import React, {Component} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {IMAGE_SIZE} from '../helpers/constants';
import {CustomCards} from './components/cards/Cards';

interface CardScreenProps {
  navigation: StackNavigationProp<AppParamList, 'CardComponent'>;
}

interface CardScreenState {}

export class CardScreen extends Component<CardScreenProps, CardScreenState> {
  render() {
    const imageUri =
      'https://images.unsplash.com/photo-1569389397653-c04fe624e663?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
    return (
      <View style={{backgroundColor: '#c7d0ed', flex: 1}}>
        <Appbar.Header style={{marginLeft: 10}}>
          <Appbar.BackAction
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Appbar.Content title="Card Component" />
          <Appbar.Action
            icon={'invert-colors'}
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
            onPress={() => console.log('ok')}
            isCoverdImage={true}
            cardHeight={200}
            cardWidth={'90%'}
            cardBorderRadius={20}
            titleText={'Card component 1'}
            titleTextColor={'white'}
            titleTextSize={22}
            descText={'This is a reusable card Component'}
            descTextColor={'white'}
            descTextSize={18}
            imageBorderRadius={20}
            blurRaduis={4}
            buttonProps={{
              onPress: () => console.log('To be implemented'),
              width: '60%',
              height: 40,
              btnText: 'Load Snippet',
              margin: 10,
              textSize: 20,
              color: '#4f75ab',
              borderRadius: 10,
            }}
            type={'row'}
            CardImageUri={imageUri}
          />
          <CustomCards
            onPress={() => console.log('ok')}
            isCoverdImage={false}
            cardBackgroundColor={'#a3adcc'}
            cardHeight={200}
            cardWidth={'90%'}
            cardBorderRadius={20}
            titleText={'Card component 1'}
            titleTextColor={'white'}
            titleTextSize={22}
            descText={'This is a reusable card Component'}
            descTextColor={'white'}
            descTextSize={18}
            imageBorderRadius={20}
            blurRaduis={0}
            buttonProps={{
              onPress: () => console.log('To be implemented'),
              width: '70%',
              height: 40,
              btnText: 'Load Snippet',
              margin: 10,
              textSize: 20,
              color: '#4f75ab',
              borderRadius: 10,
            }}
            type={'row'}
            CardImageUri={imageUri}
          />
          <CustomCards
            type={'row'}
            onPress={() => console.log('ok')}
            isCoverdImage={false}
            cardBackgroundColor={'#a3adcc'}
            cardHeight={200}
            cardWidth={'90%'}
            cardBorderRadius={0}
            titleText={'Card component 1'}
            titleTextColor={'white'}
            titleTextSize={22}
            descText={
              'dfdfgdhfghfdghfghfhfghdfhdfhdfhfhfhdfhdfghfhdfhfghfhdfhfghfghfdghfdhdfhg'
            }
            descTextColor={'white'}
            descTextSize={18}
            imageBorderRadius={50}
            blurRaduis={0}
            buttonProps={{
              onPress: () => console.log('To be implemented'),
              width: '70%',
              height: 40,
              btnText: 'Load Snippet',
              margin: 10,
              textSize: 20,
              color: '#4f75ab',
              borderRadius: 10,
            }}
            CardImageUri={imageUri}
          />
        </ScrollView>
      </View>
    );
  }
}
