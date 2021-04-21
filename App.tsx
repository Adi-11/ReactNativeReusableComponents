import 'react-native-gesture-handler';
import React, {useEffect, useMemo} from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import {AppParamList} from './app/helpers/AppParamList';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './app/screens/HomeScreen';
import {ButtonComponentScreen} from './app/screens/ButtonComponentScreen';
import {ColorScreen} from './app/screens/ColorScreen';
import {CardScreen} from './app/screens/CardScreen';
import {GlobalContext} from './app/context/GlobalProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator<AppParamList>();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
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
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
  const themeContext = {
    toggleTheme: async () => {
      await AsyncStorage.setItem('theme', isDarkTheme ? 'true' : 'false');
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
      console.log({isDarkTheme});
    },
  };

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem('theme');
      console.log({data});
      if (data === 'true') {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
    })();
    console.log({isDarkThemeState: isDarkTheme});
  }, []);

  return (
    <GlobalContext.Provider value={themeContext}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ButtonComponent"
              component={ButtonComponentScreen}
            />
            <Stack.Screen name="MasterColors" component={ColorScreen} />
            <Stack.Screen name="CardComponent" component={CardScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </GlobalContext.Provider>
  );
};

export default App;
