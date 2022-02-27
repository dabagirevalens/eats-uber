import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        name: 'Beachside Bar',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQX3cxEX8gh_s58iELg9P22HQvletOISJ51g&usqp=CAU',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1224,
        rating: 4.5
    },
    {
        name: 'Benihana',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nT9z5hmqwk2y2MgYAYZXIBF5Bw1VvPX5xQ&usqp=CAU',
        categories: ['Cafe', 'Bar'],
        price: '$$',
        reviews: 1224,
        rating: 4.5
    },
    {
        name: 'India\'s Grill',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQX3cxEX8gh_s58iELg9P22HQvletOISJ51g&usqp=CAU',
        categories: ['Indian'],
        price: '$$',
        reviews: 900,
        rating: 4.9
    },
]

const RestaurantItems = (props) => {
    return (
        <TouchableOpacity activeOpacity={1} style={{
            marginBottom: 30
        }}>
            {props.restaurantsData.map((restaurant, index) => (
                <View key={index} style={{
                    backgroundColor: 'white',
                    marginTop: 15,
                    padding: 15
                }}>
                    <RestaurantImage image={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                </View>
            ))}
        </TouchableOpacity>
    )
}

export default RestaurantItems

const RestaurantImage = (props) => (
    <>
        <Image
            source={{ uri: props.image }}
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

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }}>
        <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
            <Text style={{ fontSize: 13, color: 'gray' }}>30-45 .min</Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            borderRadius: 15,
            justifyContent: 'center'
        }}>

            <Text>{props.rating}</Text>
        </View>
    </View>
)