import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler'
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, DefaultTheme} from '@react-navigation/native'
import { useNavigation } from "@react-navigation/native"
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
 } from '@react-navigation/drawer';
import { useFonts } from 'expo-font'
import {Home, Details, GoalsHome, StartPage, AuthScreen, Account, Services, Reviews, PersonalData, Profile, About} from './screens'

import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator()

function HomeScreens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='GoalsHome'>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="GoalsHome" component={GoalsHome}/>
      <Stack.Screen name="StartPage" component={StartPage}/>
      <Stack.Screen name="AuthScreen" component={AuthScreen}/>
      <Stack.Screen name="Profile" presentation="card" component={Profile}/>
    </Stack.Navigator>
  )
}

function MyHeader({ navigation, title, styles }) {
  return (
    <View style={{ width: "100%", flexDirection: "row", justifyContent: 'space-between', padding: 20, styles }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginLeft: 0}}>
        <MaterialIcons name="arrow-back-ios" color={"black"} size={25}></MaterialIcons>
      </TouchableOpacity>
      <Text style={{color: 'black', marginRight: 10, fontWeight: "bold", fontSize: 20}}>{title}</Text>
    </View>
  )
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const CustomDrawer = props => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#f6f6f6',
            marginBottom: 20,
          }}
        >
          <View>
            <Text>John Doe</Text>
            <Text>example@email.com</Text>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 0,
          backgroundColor: '#f6f6f6',
          padding: 20,
        }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

function MyDrawer() {
  const navigation = useNavigation()

  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Discovery"
      screenOptions={{
        //gestureEnabled: true,
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Discovery"
        component={HomeScreens}
        options={{ 
          drawerLabel: 'Home',
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size}></Feather>
          ),
        }}
      />
      <Drawer.Screen
        name="Reviews"
        component={Reviews}
        options={{ 
          title: '', //Set Header Title
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginLeft: 20}}>
              <MaterialIcons name="arrow-back-ios" color={"black"} size={25}></MaterialIcons>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Text style={{color: 'black', marginRight: 10, fontWeight: "bold", fontSize: 20}}>Reviews</Text>
          ),
          drawerLabel: 'Reviews',
          drawerIcon: ({ color, size }) => (
            <Feather name="star" color={color} size={size}></Feather>
          ),
        }}
      />
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{ 
          drawerLabel: 'Account',
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box-outline" color={color} size={size}></MaterialCommunityIcons>
          ),
        }}
      />
      <Drawer.Screen
        name="Services"
        component={Services}
        options={{ 
          drawerLabel: 'Services',
          drawerIcon: ({ color, size }) => (
            <Entypo name="man" color={color} size={size}></Entypo>
          ),
          headerStyle: {
            //height: 80, 
          },
          header: ({ options }) => {

            return <MyHeader navigation={navigation} title={"Services"} styles={options.headerStyle} />
          },
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ 
          headerShown: false,
          drawerLabel: 'About',
          drawerIcon: ({ color, size }) => (
            <Feather name="briefcase" color={color} size={size}></Feather>
          ),
        }}
      />
      <Drawer.Screen
        name="PersonalData"
        component={PersonalData}
        options={{ 
          drawerLabel: 'Info',
          drawerIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={size}></Feather>
          ),
          title: '', 
          headerStyle: {
            backgroundColor: 'white', 
          },
          
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginLeft: 20}}>
              <MaterialIcons name="arrow-back-ios" color={"black"} size={25}></MaterialIcons>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Text style={{color: 'black', marginRight: 10, fontWeight: "bold", fontSize: 16}}>Personal Data</Text>
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

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
      <MyDrawer />
    </NavigationContainer>
  )
}

export default App


