import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Detail = ({navigation}) => (
    <View style={styles.container}>
        <Text>This is the Detail page</Text>
        <Button onPress={()=> navigation.navigate('Home')} title='Go Home' />
    </View>
)

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Detail