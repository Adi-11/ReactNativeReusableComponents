import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppParamList} from './app/helpers/AppParamList';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './app/screens/HomeScreen';
import {ButtonComponentScreen} from './app/screens/ButtonComponentScreen';

const Stack = createStackNavigator<AppParamList>();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="ButtonComponent"
            component={ButtonComponentScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
