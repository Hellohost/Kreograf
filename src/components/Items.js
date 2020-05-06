import React from 'react'
import { View, StyleSheet, Text, ImageBackground,  TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'



export const Items = ({ item, onOpen}) => {


    const addHandler = () => {
        console.log(item.booked);
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
    return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>

                <View style={styles.main}>
                    <View style={styles.wrapper}>
                        <View style={styles.item}>
                            <ImageBackground style={styles.image} source={{ uri: item.img }}>
                            </ImageBackground>
                            <View style={styles.description}>
                                <Text>{item.text}</Text>
                                <Text style={styles.price}>{item.price} &#8381;</Text>
                                <Text style={styles.orders}>Ранее заказано {item.orders}</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.7} onPress={addHandler}>
                                <Ionicons name="md-cart" size={60} color={'#9FBE4B'} />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.code}>
                            <Text style={styles.orders}>Арт/Код {item.date}</Text>
                            <Text>В наличии </Text>
                            <Ionicons name="ios-checkmark-circle-outline" size={20} style={inStore()} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#F0EFEF'
    },
    wrapper: {
        marginTop: 10,
        marginHorizontal: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    item: {
        flex: 1,
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderBottomColor: '#F0EFEF'
    },
    image: {
        width: 60,
        height: 60,
    },
    description: {
    },
    price: {
        fontWeight: "bold"
    },
    orders: {
        color: '#DDD9D9',
    },
    code: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
   
})