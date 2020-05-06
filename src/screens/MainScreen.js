import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { Items } from '../components/Items'
import {useDispatch, useSelector} from 'react-redux'
import { PriceLists } from '../components/Price'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { loadItems } from '../store/actions/item'


export const MainScreen = ({navigation}) => {

  const openItemHandler = (item) =>{
    navigation.navigate('Item', {itemId: item.id})
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadItems())
  }, [dispatch])

  const allItems = useSelector(state => state.item.allItems)

  return (
    <View>
      <PriceLists />
      <View>
        <Text style={styles.descPrice}>Описание прайса</Text>
      </View>
      <FlatList data={allItems} 
      keyExtractor={item => item.id.toString()}
       renderItem={({item}) => <Items item={item} onOpen={openItemHandler} booked={item.booked}/>}
      />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'Стеклокерамика',
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take info'
        iconName='ios-list'
        onPress={() => console.log('Press photo')}
      />
    </HeaderButtons>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descPrice:{
    width: '100%',
    height: 80,
    backgroundColor: '#F0EFEF',
  }
})
