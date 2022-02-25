import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const RestaurantItem = () => {
    return (
        <TouchableOpacity activeOpacity={1} style={{
            marginBottom: 30
        }}>
            <View style={{
                backgroundColor: 'white',
                marginTop: 15,
                padding: 15
            }}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantItem

const RestaurantImage = () => (
    <>
        <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nT9z5hmqwk2y2MgYAYZXIBF5Bw1VvPX5xQ&usqp=CAU" }}
            style={{
                width: '100%',
                height: 180,
                borderRadius: 4
            }}
        />
        <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} style={{ color: '#fff' }} />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = () => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>FarmHouse Kitchen Thai Cuisine</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30 -45 .min</Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            borderRadius: 15,
            justifyContent: 'center'
        }}>

            <Text>4.5</Text>
        </View>
    </View>
)