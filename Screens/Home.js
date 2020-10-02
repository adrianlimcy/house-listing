import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}) => (
    <View style={styles.container}>
        <Text>This is the Home page</Text>
        <Button onPress={()=> navigation.navigate('Detail')} title='Go t0 Detail' />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home