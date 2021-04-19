import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Appbar, Button} from 'react-native-paper';
import {AppParamList} from '../helpers/AppParamList';
import {CustomButton} from './components/Buttons/Button';

interface HomeScreenProps {
  navigation: StackNavigationProp<AppParamList, 'Home'>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const _handleSearch = () => console.log('Searching to be implemented');

  const _handleMore = () => console.log('Show more to be implemented');

  return (
    <View style={{backgroundColor: '#c7d0ed', flex: 1}}>
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
          bottom: 20,
          margin: 10,
        }}>
        <Button
          icon="gesture-tap-button"
          mode="contained"
          style={{width: '100%', borderWidth: 2}}
          onPress={() => navigation.navigate('ButtonComponent')}>
          Button components
        </Button>
      </ScrollView>
    </View>
  );
};
