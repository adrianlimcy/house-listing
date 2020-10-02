import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Settings = ( {navigation }) => (
    <View style={styles.container} >
        <Text>This is the settings page</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Settings
