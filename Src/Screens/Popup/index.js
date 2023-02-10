import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

const Popup = (props) => {
    const hhh = (
        {
            id: 1,
            name: 'khfk',
            number: 77645776
        },
        {
            id: 2,
            name: 'khfk',
            number: 77645776
        },
        {
            id: 2,
            name: 'khfk',
            number: 77645776
        }
    )
    
    const [data, setData] = useState(false)
    const [onDeck, setOnDeck] = useState(false)
    const [error, setError] = useState("");
    const [inputText, setInputText] = useState({
        name: '',
        mobilenum: ''
    })
    
    const handle=()=>{
        if (isValid) {
                setError("");
                console.log("SUBMITTED! ", email);
            } else {
                setError("Email not valid. Please try again.")
                console.log("EMAIL WAS INVALID.");
            }
        
    }
    return (
        <View>
            <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({})=>{
               return(
                <View>
                    <Text>{item.id}</Text>
                </View>
               )
            }}
            >

            </FlatList>
            <View>
                <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}
                    onPress={() => {
                        setOnDeck(true)
                    }}>
                    <Text style={Styles.addText}>Add Contact</Text>
                </TouchableOpacity>
                <View>
                    <Modal
                        style={{ backgroundColor: '#fff' }}
                        isVisible={onDeck}
                    >
                        <TouchableOpacity
                            style={{ alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => {
                                setOnDeck(false)
                            }}
                        >
                            <Text>close</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={{ borderWidth: 2, margin: 20 }}
                            value={inputText.name}
                            placeholder='enter name'
                            onChangeText={(e) =>
                                setInputText({
                                    ...inputText,
                                    name: e
                                })}>

                        </TextInput>
                        <TextInput
                            style={{ borderWidth: 2, margin: 20 }}
                            value={inputText.mobilenum}
                            placeholder='enter number'
                            onChangeText={(e) =>
                                setInputText({
                                    ...inputText,
                                    mobilenum: e
                                })}>
                        </TextInput>
                       <TouchableOpacity
                       style={{alignItems:'center',justifyContent:'center'}}
                       onPress={()=>handle}
                       >
                        <Text style={{borderWidth:1,textAlign:'center', backgroundColor:'green',color:'#fff', width:'30%'}}>Submit</Text>
                       </TouchableOpacity>

                    </Modal>

                </View>

            </View>
        </View>


    )
}
export default Popup