import React from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {

    const [loading, setLoading ] = React.useState(true)
    const [error, setError] = React.useState('')
    const [data, setData] = React.useState([]) 

    const fetchAPI = async () => {
        try {
            const data = await fetch ('https://my-json-server.typicode.com/PacktPublishing/React-Projects/listings')
            const dataJSON = await data.json()

            if (dataJSON) {
                setData(dataJSON)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    React.useEffect( ()=> {
        fetchAPI()
    }, [])

    return (
        <View style={styles.container}>
            {!loading && !error &&
                <FlatList
                    data={data}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=> navigation.navigate('Detail', {item})}>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            }
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home