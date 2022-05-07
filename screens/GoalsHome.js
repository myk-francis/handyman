import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { popular, categories} from "../constants"
import Popular from './Popular'
import Discovery from './Discovery'


import Foundation from "react-native-vector-icons/Foundation"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [popularData, setPopular] = React.useState(popular)
  const [isFetching, setFetching] = React.useState(false)

  const handleSearch = (value) => {
    if (value.length === 0 || value === "") {
      setPopular(popularData)
    }

    const filteredData = popularData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )

    if (filteredData.length === 0) {
      setPopular(popularData)
    } else {
      setPopular(filteredData)
    }
  }

  const onRefresh = () => { 
    setFetching(true)
    setPopular(popular)
    setFetching(false)
  }


  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => (<Discovery categories={categories}/>)}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" color={color} size={size}></Foundation>
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        //component={<Popular handleSearch={handleSearch} isFetching={isFetching} popularData={popularData}/>}
        children={() => ( <Popular handleSearch={handleSearch} onRefresh={onRefresh} isFetching={isFetching} popularData={popularData}/>)}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="grid" color={color} size={size}></Entypo>
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Profile}
        options={{
          tabBarLabel: 'Fav',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={size}></FontAwesome>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Profile}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size}></Ionicons>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function GoalsHome() {
  return (
    <MyTabs />
  )
}