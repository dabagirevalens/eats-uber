import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
    return (
        <View style={{ marginTop: 15, flexDirection: "row", alignItems: 'center' }}>
            <GooglePlacesAutocomplete placeholder='Search...'
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },

                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        marginRight: 10
                    }
                }}

                renderLeftButton={() => (
                    <View style={{ marginTop: 18, marginLeft: 10, height : 25 }}>
                        <Ionicons name='location-sharp' size={24} />
                    </View>
                )}

                renderRightButton={() => (
                    <View style={{
                        flexDirection: 'row',
                        marginRight: 8,
                        backgroundColor: '#fff',
                        padding: 6,
                        paddingTop : 4,
                        borderRadius: 30, 
                        height: 30,
                        alignItems : 'center',
                        alignSelf: 'center'
                    }}>
                        <AntDesign name='clockcircle' size={14} style={{ marginRight: 6, marginTop : 3 }} />
                        <Text>search</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default SearchBar