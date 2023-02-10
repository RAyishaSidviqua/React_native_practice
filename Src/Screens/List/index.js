import { FlatList, View, Text, Image, TouchableOpacity, window } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ListData } from '../../Json/ListData';
import Styles from './Styles';

const List = (props) => {

    const [data, setData] = useState(ListData)
    const [liked, setLiked] = useState(null)

    const handleLike = (id) => {
        var items = data

        setLiked(id)
        data.forEach((val) => {
            if (val._id === id) {
                if (val.liked === true) {
                    return (val.liked = false)
                } else {
                    return (val.liked = true)
                }
            } else {
                return (val.liked = val.liked)
            }
        })
        // setData(data)
    }


    return (
        <View>
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
            <FlatList
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={(({ item }) => {
                    return (
                        <View style={Styles.card}>
                            <View style={Styles.num}>
                                <Text style={Styles.text1}>
                                    {item.title.slice(0, 1)}
                                </Text>
                            </View>
                            <View style={{ maxWidth: '60%' }}>
                                <View >
                                    <Text style={Styles.text1}>title : {item.title}</Text>
                                </View>
                                <View >
                                    <Text style={Styles.text1}>rating : {item.rating}</Text>
                                </View>
                                <View >
                                    <Text style={Styles.text1}>distence : {item.distence}</Text>
                                </View>

                                <View style={Styles.mainText}>
                                    {
                                        item.is24 &&
                                        <View style={Styles.imgg1}>
                                            <Image style={Styles.imgg2}
                                                source={require('../../Assets/24.png')}
                                            />
                                        </View>
                                    }
                                    <View style={{ marginLeft: item.is24 ? '5%' : null }}>
                                        <Text style={Styles.text1}>open: {item.timings[0].tuesday.open}</Text>
                                        <Text style={Styles.text1}>close: {item.timings[0].tuesday.close}</Text>
                                    </View>
                                </View>



                            </View>
                            <View style={Styles.likeText}>
                                {/* <TouchableOpacity onPress={(item)=>handleClick(item._id)}>
                                {
                                    item.liked?
                                        <Image style={Styles.favImg}
                                            source={require('../../Assets/like.png')}
                                        /> :
                                        <Image style={Styles.favImg}
                                            source={require('../../Assets/dislike.png')}
                                        />
                                }
                                </TouchableOpacity> */}
                                <TouchableOpacity
                                    onPress={() => { handleLike(item._id) }}>
                                    {
                                        liked === item._id ?
                                            <Image style={Styles.favImg}
                                                source={require('../../Assets/like.png')}
                                            /> :
                                            <Image style={Styles.favImg}
                                                source={require('../../Assets/dislike.png')}
                                            />
                                    }
                                </TouchableOpacity>


                            </View>

                        </View>


                    )
                })}
            >

            </FlatList>
        </View>
    )
}
export default List 