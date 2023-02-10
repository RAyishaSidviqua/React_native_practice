import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';
const Profile = (props) => {
    const [onDeck, setOnDeck] = useState(false)
    const [bgColorChg, setBgColorChg] = useState(false)
    const [bgColorChg1, setBgColorChg1] = useState(false)
    const [bgColorChg2, setBgColorChg2] = useState(false)
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.goBack()
                }}
                style={Styles.backView}
            >

                <Image
                    style={{ height: 24, width: 24 }}
                    source={require('../../Assets/arrow.png')}
                />
            </TouchableOpacity>
            <Image style={Styles.bgImg}
                source={require('../../Assets/bgImg.png')}
            />

            <Image
                style={Styles.img1}
                source={require('../../Assets/img.png')}
            />
            <View style={Styles.container}>
                <View style={Styles.imgHead}>
                    <Text style={{ ...Styles.addText, marginTop: '10%' }}>John Doe</Text>
                    <Text style={Styles.addText}>Driver Id: #1234</Text>
                </View>
                <View style={Styles.cameraText}>
                    <Image style={{ ...Styles.img2, marginTop: '5%' }}
                        source={require('../../Assets/cameraImg.png')}
                    />
                    <Text style={{ ...Styles.addText1, marginTop: '5%' }}>Add Photo</Text>
                </View>
                <View style={{ ...Styles.list, marginTop: '5%' }}>

                    <TouchableOpacity onPress={() => {
                        setBgColorChg(!bgColorChg)
                        setBgColorChg1(false)
                        setBgColorChg2(false)
                    }


                    } style={[Styles.listText, { backgroundColor: bgColorChg === false ? '#EEE9DA' : 'pink' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={Styles.img4}
                                source={require('../../Assets/timeImg.png')}
                            />
                            <Text style={Styles.addText}>History</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setBgColorChg1(!bgColorChg1)
                        setBgColorChg(false)
                        setBgColorChg2(false)
                    }}
                        style={[Styles.listText, { backgroundColor: bgColorChg1 === false ? '#EEE9DA' : 'pink' }]}>
                        <Image style={Styles.img4}
                            source={require('../../Assets/carImg.png')}
                        />
                        <Text style={Styles.addText}>My Trip</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setBgColorChg2(!bgColorChg2)
                        setBgColorChg1(false)
                        setBgColorChg(false)
                    }

                    } style={[Styles.listText, { backgroundColor: bgColorChg2 === false ? '#EEE9DA' : 'pink' }]}>

                        <Image style={Styles.img4}
                            source={require('../../Assets/carImg.png')}
                        />
                        <Text style={Styles.addText}>My Profile</Text>

                    </TouchableOpacity>
                </View>

                <View style={{ marginBottom: 30, marginTop: '10%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={Styles.addText}>onDeck</Text>
                    <TouchableOpacity
                        onPress={() => {
                            setOnDeck(!onDeck)
                        }}
                        style={Styles.switch}
                    >
                        {onDeck ?
                            < View style={Styles.circleOnDeck}>

                            </View> :
                            <View style={Styles.circleOffDeck}>

                            </View>}
                    </TouchableOpacity>
                    <Text style={Styles.addText}>offDeck</Text>
                </View>


            </View >
        </View >
    )


}
export default Profile