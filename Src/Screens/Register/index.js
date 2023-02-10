import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import Styles from './Styles';


const Register = (props) => {
    const [registerDetails, setRegisterDetails] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        address: ''
    })

    const [showError, setShowError] = useState({
        all: false,
        firstName: false,
        lastName: false,
        email: false,
        mobileNumber: false,
        address: false
    })

    const [errorMsg, setErrorMsg] = useState("")
    const handleInputs = () => {
        var numbers = /^[0-9]+$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (registerDetails.firstname === "") {
            setShowError({
                ...showError,
                firstName: true
            })
            setErrorMsg('Enter First Name')
        }
        else if (registerDetails.lastname === "") {
            // seShowError(true)
            // setErrorMsg('Enter Last Name')
        }
        else if (registerDetails.email === "") {
            // seShowError(true)
            // setErrorMsg('Enter Email')
        }
        else if (!mailformat.test(registerDetails.email)) {
            // seShowError(true)
            // setErrorMsg('Enter Valid Email')
        }
        else if (registerDetails.phonenumber === "") {
            // seShowError(true)
            // setErrorMsg('Enter Phone Number')
        }
        else if (!numbers.test(registerDetails.phonenumber)) {
            // seShowError(true)
            // setErrorMsg('Enter Valid Phone Number')
        }
        else if (registerDetails.address === "") {
            // seShowError(true)
            // setErrorMsg('Enter Address')
        }
        else {
            // seShowError(false)
            // setErrorMsg("")
        }
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.arrowText}>
                <TouchableOpacity
                    style={Styles.backView}
                    onPress={() => {
                        props.navigation.goBack()
                    }}
                >
                    <Image
                        style={{ height: 30, width: 30, marginBottom: 10 }}
                        source={require('../../Assets/arrowWhite.png')}
                    />
                </TouchableOpacity>
                <View style={{ marginTop: 10, marginLeft: 30 }}>
                    <Text style={Styles.registerText}>Register</Text>
                </View>
            </View>
            <ScrollView style={Styles.subContainer}>
                <View style={{ marginTop: 15, }}>
                    <Text>First Name</Text>
                    <TextInput
                        style={Styles.inputfield}
                        value={registerDetails.firstname}
                        onChangeText={(e) => {
                            setRegisterDetails({
                                ...registerDetails,
                                firstname: e
                            })
                        }}
                    >
                    </TextInput>
                    {showError.firstName && <Text style={Styles.errMsg}>{errorMsg}</Text>}
                </View>

                <View style={{ marginTop: 15, }}>
                    <Text>Last Name</Text>
                    <TextInput
                        style={Styles.inputfield}
                        value={registerDetails.lastname}
                        onChangeText={(e) => {
                            setRegisterDetails({
                                ...registerDetails,
                                lastname: e
                            })

                        }}
                    />

                </View>

                <View style={{ marginTop: 15, }}>
                    <Text>Email</Text>
                    <TextInput
                        style={Styles.inputfield}
                        value={registerDetails.email}
                        onChangeText={(e) => {
                            setRegisterDetails({
                                ...registerDetails,
                                email: e
                            })
                        }}
                    />

                </View>
                <View style={{ marginTop: 15, }}>
                    <Text>Phone Number</Text>
                    <TextInput
                        style={Styles.inputfield}
                        value={registerDetails.phonenumber}
                        maxLength={10}
                        keyboardType='numeric'
                        onChangeText={(e) => {
                            setRegisterDetails({
                                ...registerDetails,
                                phonenumber: e
                            })
                        }}
                    />
                </View>
                <View style={{ marginTop: 15, }}>
                    <Text>Address</Text>
                    <TextInput
                        style={Styles.inputfieldAdress}
                        value={registerDetails.address}
                        multiline={true}
                        onChangeText={(e) => {
                            setRegisterDetails({
                                ...registerDetails,
                                address: e
                            })
                        }}
                    />
                    {showError.address && <Text style={Styles.errMsg}>{errorMsg}</Text>}
                </View>
                <TouchableOpacity
                    style={Styles.currentLocationHead}
                >
                    <Image

                        source={require('../../Assets/location.png')}
                    />
                    <Text style={Styles.CurrentLocation}>Use Current Location</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => handleInputs()}

                >
                    <Text style={Styles.NextButton}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </View >

    )
}
export default Register
