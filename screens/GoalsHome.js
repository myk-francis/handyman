import * as React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { popular, categories, servicesSelected} from "../constants"
import Popular from './Popular'
import Discovery from './Discovery'
import Liked from './Liked'
import Cart from './Cart'


import Foundation from "react-native-vector-icons/Foundation"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import Entypo from "react-native-vector-icons/Entypo"

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [modalVisible, setModalVisible] = React.useState(false)

  const [selectedServices, setSelectedServices] = React.useState(servicesSelected)

  const [total, setTotal] = React.useState(0)

  const [popularData, setPopular] = React.useState(popular)
  const [isFetching, setFetching] = React.useState(false)

  React.useEffect(() => {
    setTotal(selectedServices.map(item => parseInt(item.price)).reduce((prev, curr) => prev + curr, 0))
  }, [selectedServices])

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

  const removeService = (id) => {
    setSelectedServices(selectedServices.filter(item => item.id !== id))
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
        //component={Profile}
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
        children={() => (<Liked />)}
        options={{
          tabBarLabel: 'Fav',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={size}></FontAwesome>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        children={() => (<Cart modalVisible={modalVisible} setModalVisible={setModalVisible} servicesSelected={selectedServices} removeService={removeService} servicesTotal={total} />)}
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