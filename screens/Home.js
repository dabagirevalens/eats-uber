import { View, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'

const Home = () => {
    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#eee' }}>
            <View style={{ backgroundColor : 'white', padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    )
}

export default Home