import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StatusBar, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar, Button} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {BannerComponent} from './helperScreens/Banner';

interface HomeScreenProps {
  navigation: StackNavigationProp<AppParamList, 'Home'>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [isBanner, setIsBanner] = useState<boolean>(false);

  useEffect(() => {
    // console.log('hello');
  });

  const _handleSearch = () => console.log('Searching to be implemented');

  const _handleMore = () => console.log('Show more to be implemented');

  return (
    <View style={{backgroundColor: '#0000', flex: 1}}>
      <BannerComponent />
      <Appbar.Header style={{marginLeft: 10}}>
        <StatusBar barStyle={'dark-content'} />
        <Appbar.Content
          title="Components Screen"
          subtitle="React native components"
        />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
      </Appbar.Header>
      <ScrollView
        style={{paddingTop: 30}}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'flex-start',
          bottom: 0,
          margin: 10,
        }}>
        <Button
          icon="gesture-tap-button"
          mode="contained"
          style={{width: '100%', borderWidth: 2, marginBottom: 20}}
          onPress={() => navigation.navigate('ButtonComponent')}>
          Button components
        </Button>
        <Button
          icon="cards"
          mode="contained"
          style={{width: '100%', borderWidth: 2}}
          onPress={() => navigation.navigate('CardComponent')}>
          Cards Components
        </Button>
      </ScrollView>
    </View>
  );
};
