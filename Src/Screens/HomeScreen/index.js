import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './Styles'

const HomeScreen = (props) => {

    console.log('props', props);
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
                style={Styles.ButtonStyle}
                onPress={() => {
                    props.navigation.navigate('LoginForm')
                }}
            >
                <Text>
                    Login Form
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.ButtonStyle}
                onPress={() => {
                    props.navigation.navigate('List')
                }}
            >
                <Text>
                    List
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.ButtonStyle}
                onPress={() => {
                    props.navigation.navigate('Profile')
                }}
            >
                <Text>
                    Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.ButtonStyle}
                onPress={() => {
                    props.navigation.navigate('Contact')
                }}
            >
                <Text>
                Contact
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.ButtonStyle}
                onPress={() => {
                    props.navigation.navigate('Register')
                }}
            >
                <Text>
                Register
                </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
                style={Styles.ButtonStyle}
                onPress={() => {
                    props.navigation.navigate('Popup')
                }}
            >
                <Text>
                Popup
                </Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default HomeScreen