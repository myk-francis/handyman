import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme} from '@react-navigation/native'
import 'react-native-gesture-handler';
import { useFonts } from 'expo-font'
import {Home, Details, GoalsHome, StartPage, AuthScreen, Account, Services, Reviews, PersonalData, Discovery, Popular} from './screens'

const Stack = createStackNavigator()

const theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, 
    background: "transparent" 
  }
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;


  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="GoalsHome" component={GoalsHome}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="StartPage" component={StartPage}/>
        <Stack.Screen name="AuthScreen" component={AuthScreen}/>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Services" component={Services}/>
        <Stack.Screen name="Reviews" component={Reviews}/>
        <Stack.Screen name="PersonalData" component={PersonalData}/>
        <Stack.Screen name="Discovery" component={Discovery}/>
        <Stack.Screen name="Popular" component={Popular}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App


