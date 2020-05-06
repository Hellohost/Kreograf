import React from 'react'
import { TouchableOpacity } from 'react-native'
import {PriceLists} from '../components/Price'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'


export const PriceList = ({navigation}) => {
  const goToItem = () =>{
    navigation.navigate('Main')
  }
  return (
    <TouchableOpacity activeOpacity={0.7}  onPress={goToItem}>
      <PriceLists />
    </TouchableOpacity>
  )
}

PriceList.navigationOptions = {
  headerTitle: 'Ппрайс-листы',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take info'
        iconName='ios-information-circle-outline'
        onPress={() => console.log('Press photo')}
      />
    </HeaderButtons>
  )
}

