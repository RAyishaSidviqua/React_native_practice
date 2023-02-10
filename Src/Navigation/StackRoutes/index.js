import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../Screens/HomeScreen';
import LoginForm from '../../Screens/LoginForm';
import List from '../../Screens/List';
import Profile from '../../Screens/Profile';
import Contact from '../../Screens/Contact';
import Register from '../../Screens/Register';
// import Popup from '../../Screens/Popup';




const StackRoutes = () => {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="LoginForm" component={LoginForm} />
                    <Stack.Screen name="List" component={List} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Contact" component={Contact} />
                    <Stack.Screen name="Register" component={Register} />
                    {/* <Stack.Screen name="Popup" component={Popup} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </>

    )
}

export default StackRoutes