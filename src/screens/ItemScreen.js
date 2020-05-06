import React , {useEffect} from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PriceLists } from '../components/Price'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { Ionicons } from '@expo/vector-icons'
import { loadItems } from '../store/actions/item'

export const ItemScreen = ({ navigation }) => {


  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadItems())
  }, [dispatch])

  const allItems = useSelector(state => state.item.allItems)

  
  const itemId = navigation.getParam('itemId')
  const addHandler = () =>{
    console.log('added')
  }
  
  const inStore = () => {
    if(item.booked === true) {
        return {
            color: 'green'
        }
    } else{
        return {
            color: 'red'
        }
    }
}

  const item = allItems.find(i => i.id === itemId)
  return (
    <View>
      <PriceLists />
      <View>
        <Text style={styles.descPrice}>Описание прайса</Text>
      </View>
      <View style={styles.wrapperImg}>
        <Image source={{ uri: item.img }} style={styles.image} />
      </View>

      <View style={styles.description}>
        <View style={styles.info}>
          <Text style={styles.text}>{item.text}</Text>
          <Text style={styles.price}>{item.price} &#8381;</Text>
          <Text style={styles.orders}>Ранее заказано: {item.orders}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={addHandler}>
          <Ionicons name="md-cart" size={60} color={'#9FBE4B'}/>
        </TouchableOpacity>
      </View>
      <View style={styles.code}>
        <Text style={styles.codeItem}>Арт/Код {item.date}</Text>
        <Text style={styles.codeItem}>В наличии</Text>
        <Ionicons name="ios-checkmark-circle-outline" size={20} style={inStore()} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerPrice}>130000 &#8381;</Text>
        <TouchableOpacity style={styles.footerButton} onPress={addHandler}>
          <Text style={styles.footerText}>Оформить заказ</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

ItemScreen.navigationOptions = ({ navigation }) => {
  const itemId = navigation.getParam('itemId')
  return {
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
}

const styles = StyleSheet.create({
  wrapperImg: {
    alignItems: 'center'
  },
  image: {
    width: 240,
    height: 240,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD9D9',
    paddingBottom: 15
  },
  price: {
    fontWeight: "bold"
  },
  orders: {
    color: '#DDD9D9'
  },
  code: {
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15
  },
  codeItem: {
    color: '#DDD9D9'
  },
  footer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  footerPrice: {
    width: '50%',
    height: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 10,
    backgroundColor: '#F0EFEF',
    borderRadius: 5

  },
  footerButton: {
    backgroundColor: '#E59142',
    height: '100%',
    borderRadius: 5,
    paddingHorizontal: '7%'
  },
  footerText:{
    color: '#fff',
    fontSize: 18,
    alignItems: 'center',
    paddingTop: 10,
    // paddingLeft: 15
  },
  descPrice:{
    width: '100%',
    height: 80,
    backgroundColor: '#F0EFEF',
  }

})
