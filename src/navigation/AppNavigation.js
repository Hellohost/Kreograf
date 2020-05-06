import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { MainScreen } from '../screens/MainScreen'
import { ItemScreen } from '../screens/ItemScreen'
import {Ionicons} from '@expo/vector-icons'
import { Platform } from 'react-native'
import { PriceList } from '../screens/PriceList'

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Item: {
      screen: ItemScreen
    },
    Price: PriceList
  },
  {
    initialRouteName: 'Price'
  }
)

const  LowNavigator = createStackNavigator({
  Main: MainScreen,
  Item: ItemScreen,
  Price: PriceList
},
  {
    initialRouteName: 'Price'
  }
)
const  LowSecondNavigator = createStackNavigator({
  Main: MainScreen,
  Item: ItemScreen,
  Price: PriceList
},
  {
    initialRouteName: 'Price'
  }
)

const BottomNavigator = createBottomTabNavigator({
  Price: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: false,
      tabBarIcon: info => ( <Ionicons name='md-home' size={25} color={'#B8B2B2'}/>
  
      )}
  },
  Low: {
    screen: LowNavigator,
    navigationOptions: {
      tabBarIcon: info => ( <Ionicons name='md-list-box' size={25} color={'#B8B2B2'}/>
      )
    }
  },
  LowSecond: {
    screen: LowSecondNavigator,
    navigationOptions:  {
      tabBarIcon: info => ( <Ionicons name='ios-contact' size={25} color={'#B8B2B2'}/>
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: 'orange'
  }
})

export const AppNavigation = createAppContainer(BottomNavigator)
