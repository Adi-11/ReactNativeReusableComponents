import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  ActivityIndicator,
} from 'react-native-paper';
import {AppParamList} from './app/helpers/AppParamList';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './app/screens/HomeScreen';
import {ButtonComponentScreen} from './app/screens/ButtonComponentScreen';
import {ColorScreen} from './app/screens/ColorScreen';
import {CardScreen} from './app/screens/CardScreen';
import {GlobalContext} from './app/context/GlobalProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import {SvgScreen} from './app/screens/SvgScreen';

const Stack = createStackNavigator<AppParamList>();
const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333',
  },
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff',
  },
};
const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>();
  const [isThemed, setIsThemed] = useState<string>('false');
  const [loading, setLoading] = useState<boolean>(true);
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  useEffect(() => {
    // (async () => await AsyncStorage.removeItem('theme'))();
    setLoading(true);
  }, []);
  useEffect(() => {
    setLoading(true);
    _handler();
  }, [isThemed]);
  const _handler = async () => {
    try {
      setLoading(true);
      let themeValue = await AsyncStorage.getItem('theme');
      if (themeValue) {
        setIsThemed(themeValue);
        if (isThemed === 'true') {
          setIsDarkTheme(true);
        } else {
          setIsDarkTheme(false);
        }
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const themeContext = {
    toggleTheme: async () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
      try {
        const themeValue = !isDarkTheme ? 'true' : 'false';
        await AsyncStorage.setItem('theme', themeValue);
      } catch (error) {
        console.error(error);
      }
    },
    theme: isThemed,
  };

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator theme={theme} animating={true} size={50} />
      </View>
    );
  }

  return (
    <PaperProvider theme={theme}>
      <GlobalContext.Provider value={themeContext}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ButtonComponent"
              component={ButtonComponentScreen}
            />
            <Stack.Screen name="CardComponent" component={CardScreen} />
            <Stack.Screen name="SVGComponent" component={SvgScreen} />
            <Stack.Screen name="MasterColors" component={ColorScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GlobalContext.Provider>
    </PaperProvider>
  );
};

export default App;
