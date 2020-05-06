import React from 'react'
import { View, StyleSheet, Text, Image, Button, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const PriceLists = ({navigation}) => {
    
    return (
            <View style={styles.wrapper}>
                <Ionicons style={styles.img} name="md-laptop" size={70} color={'#B8B2B2'}/>
                {/* <Image
                    style={styles.img}
                    source={{ uri: 
                    'https://previews.123rf.com/images/rastudio/rastudio1601/rastudio160103778/51365232-camera-line-icon-for-web-mobile-and-infographics-vector-grey-thin-line-icon-in-the-circle-isolated-o.jpg' }} /> */}
                <View>
                    <Text style={styles.name}>Гагеон трейд</Text>
                    <Text style={styles.desc}>Стеклокерамика</Text>
                    <Text style={styles.date}>25.12.2013</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        paddingLeft: 10,
        paddingTop: 15
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
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
    name: {
        color: '#E59142'
    },
    desc: {
        fontWeight: 'bold'
    },
    date: {
        color: '#CECBC9'
    }
})