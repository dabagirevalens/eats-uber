import { View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'

const Home = () => {

    const [restaurantsData, setRestaurantsData] = React.useState(localRestaurants)

    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#eee' }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantsData={restaurantsData} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home