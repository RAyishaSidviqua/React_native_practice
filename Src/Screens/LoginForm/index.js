import { Text, StyleSheet, TextInput, TouchableOpacity, View, Image, ScrollView, Dimensions } from 'react-native';
import React, { useState } from 'react';
import styles from './Styles';

const LoginForm = (props) => {
    const [phoneNum, setPhoneNum] = useState({
        mobileNumber: ''
    })
    const [showError, setShowError]=useState(false)
    const [errormsg, seErrormsg]=useState("")
    var numbers=/^[0-9]+$/;
    const handleSubmit=(()=>{
        if(phoneNum.mobileNumber === ""){
            setShowError(true)
            seErrormsg("Enter Phone Number")
        }
        else if(!numbers.test(phoneNum.mobileNumber)){
            setShowError(true)
            seErrormsg("Enter Valid Phone Number")
        }
        else{
            setShowError(false)
            seErrormsg("")
            setPhoneNum({
                ...phoneNum,
                mobileNumber: '',
                
              })
        }
    })
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.goBack()
                }}
                style={styles.backView}
            >

                <Image
                    style={{ height: 24, width: 24 }}
                    source={require('../../Assets/arrow.png')}
                />
            </TouchableOpacity>
            <ScrollView style={{ height: Dimensions.get('screen').height }}>
                <Image
                    style={{ marginTop: 50, alignSelf: 'center' }}
                    source={require('../../Assets/logo.png')}
                />
                <View style={{ paddingHorizontal: '10%', marginTop: 100 }}>
                    <Text >Phone Number</Text>
                    <TextInput
                        style={styles.textInput}
                        value={phoneNum.mobileNumber}
                        placeholder='Enter number'
                        keyboardType='numeric'
                        maxLength={10}
                        onChangeText={(e) => {
                            console.log('eeee', e);
                            setPhoneNum({
                                ...phoneNum,
                                mobileNumber:e
                            })
                        }}
                    />
                </View>

                {showError && <Text style={styles.error}>{errormsg}</Text>}
                <TouchableOpacity 
                style={styles.btn}
                onPress={()=>handleSubmit()}
                >
                    <Text style={{ color: '#fff' }}>Genrate OTP</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.genraText1}
                    onPress={()=>{
                        props.navigation.navigate('Register')
                    }}
                    
                >
                    <Text style={{ color: '#913175', textDecorationLine: 'underline' }}>Not Yet Register?Sign up</Text>
                </TouchableOpacity>

            </ScrollView>
            <View style={styles.img2}>
                <Image
                    source={require('../../Assets/bottomImage.png')}
                />
            </View>
        </View>


    )
}

export default LoginForm