import { View, Text, Image, FlatList, TouchableOpacity, Linking, TextInput } from 'react-native';
import React, { useState } from 'react';
import { ContactList } from '../../Json/ContactList';
import Styles from './Styles';
import Modal from "react-native-modal";


const Contact = (props) => {
  const [data, setData] = useState(ContactList)
  const [showModel, setShowModel] = useState(false)
  const [inputText, setInputText] = useState({
    name: '',
    mobileNumber: '',
  })
  const [showErr, setShowErr] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");



  // ********************cards delete code*******************88
  const handleDelete = ((id) => {
    const newData = data.filter((item) => {
      if (item.id != id) {
        return item
      }
    })
    setData(newData)
  })
  // **************************close****************************
  const handleAddContact = ((e) => {
    var numbers = /^[0-9]+$/;
    if (inputText.name === "") {
      setShowErr(true)
      setErrorMsg("Enter Name")
    }
    else if(inputText.mobileNumber ===  ""){
      setShowErr(true)
      setErrorMsg("Enter Mobile Number")
    }
    else if(!numbers.test(inputText.mobileNumber)){
      setShowErr(true)
      setErrorMsg("Enter valid Mobile Number")

    }
    else {
      setShowErr(false)
      setErrorMsg("")
      setShowModel(false)
      setInputText({
        ...inputText,
        mobileNumber: '',
        name: ''
      })
      const newContact = {
        id: data.length + 1,
        name: inputText.name,
        phoneNumber: parseInt(inputText.mobileNumber),
        imgUrl: ''
      }
      data.push(newContact)
      console.log(newContact);
    }

  })


  return (
    <View style={Styles.container}>
      <View style={{ backgroundColor: '#3D1766', flexDirection: 'row', height: '100%', position: 'absolute', width: '100%' }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack()
          }}
          style={Styles.backView}
        >
          <Image
            style={{ height: 24, width: 24 }}
            source={require('../../Assets/arrowWhite.png')}
          />
        </TouchableOpacity>
        <Text style={{ marginTop: 20, fontWeight: 600, color: '#fff' }}>Tursted Contact</Text>
      </View>
      <View style={Styles.subContainer}>
        <View style={Styles.AddContact}>
          <Image
            style={Styles.userText}
            source={require('../../Assets/user.png')}
          />
          <TouchableOpacity
            onPress={() => {
              setShowModel(true)
            }}
          >
            <Text style={Styles.addText}>Add Contact</Text>
          </TouchableOpacity>
        </View>
        {data.length === 0 && <View style={Styles.noData}>
          <Text style={{ fontSize: 40, fontWeight: 600 }}>No Data Found</Text>
        </View>}
        <FlatList
          data={data}
          keyExtractor={(item) => { item.id }}
          style={{ marginTop: 20 }}
          renderItem={(({ item }) => {
            return (
              <View style={Styles.card}>
                <View style={Styles.circleHed}>
                  <View style={Styles.circle}>
                    <Image
                      style={{ height: 50, width: 50, borderRadius: 50 }}
                      source={item?.imgUrl}
                    />
                  </View>

                  <View style={{ width: '70%' }}>
                    <Text style={Styles.text}>{item.name}</Text>
                    <Text style={Styles.text}>{item.phoneNumber}</Text>
                  </View>
                </View>

                <View style={Styles.iconsView}>
                  <TouchableOpacity
                    style={Styles.SingleIconView}
                    onPress={() => { Linking.openURL(`tel:${item.phoneNumber}`); }}
                  >
                    <Image
                      style={Styles.iconStyle}
                      source={require('../../Assets/phonIcon.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={Styles.SingleIconView} onPress={() => handleDelete(item.id)}>
                    <Image style={Styles.iconStyle}
                      source={require('../../Assets/deleteWhite.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )
          })}
        >
        </FlatList>
      </View >
      <Modal
        isVisible={showModel}
      >
        <View style={Styles.alertBox}>

          <TouchableOpacity
            style={Styles.close}
            onPress={() => {
              setShowModel(false)
              setInputText({
                ...inputText,
                mobileNumber: '',
                name: ''
              })
            }}
          >
            <Image
              source={require('../../Assets/cancelButton.png')}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 25, fontWeight: 600, marginBottom: 20 }}>
            Contact Field
          </Text>
          <TextInput
            style={Styles.inputText}
            placeholder='Enter Your Name'
            value={inputText.name}
            placeholderTextColor={'grey'}
            onBlur={() => {
              if (inputText.name === "") {
                setShowErr(true)
                setErrorMsg('Enter valid Name')
              }

            }}
            onChangeText={(e) => {
              setInputText({
                ...inputText,
                name: e
              })
            }}
          >
          </TextInput>
          <TextInput
            style={Styles.inputText}
            value={inputText.mobileNumber}
            keyboardType='numeric'
            placeholder='Enter Your Number'
            maxLength={10}
            placeholderTextColor={'grey'}
            onChangeText={(e) =>
              setInputText({
                ...inputText,
                mobileNumber: e
              })
            }
          >
          </TextInput>
          {/* *********************error code************************** */}
          {showErr && <Text style={Styles.error}>{errorMsg}</Text>}
          {/* *****************************close************************** */}
          <TouchableOpacity style={Styles.submitButton}
            onPress={() => handleAddContact()}
          >
            <Text
              style={{ color: '#fff' }}
            >Submit</Text>
          </TouchableOpacity>

        </View>

      </Modal >

    </View >

  )
}
export default Contact