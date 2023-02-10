import { StyleSheet } from 'react-native'
// import Profile from "."

const Styles = StyleSheet.create({
    backView: {
        // borderWidth: 2,
        justifyContent: 'center',
        paddingLeft:20,
        paddingTop:20,
        // alignItems: 'center',
        zIndex: 6,
        // marginTop:100
    },
    bgImg: {
        backgroundColor: '#B05A7A',
        opacity: 0.7,
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    container: {
        backgroundColor: '#B7B78A',
        alignSelf: 'center',
        width: '100%',
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
        marginTop: 150,
        height: '100%'
    },
    imgHead: {

        alignItems: 'center',
    },
    img1: {
        height: 100,
        width: 100,
        position: 'absolute',
        // bottom: 15,
        zIndex: 3,
        top: 140,
        alignSelf: 'center'
    },
    img2: {
        height: 20,
        width: 20,
        margin: 5
    },
    img4: {

        margin: 5
    },
    addText: {
        fontWeight: "600",
        margin: 5,

    },
    addText1: {
        fontWeight: "600",
        margin: 5,
        textDecorationLine: 'underline'
    },
    cameraText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    list: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    listText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        backgroundColor: '#EEE9DA',
        borderRadius: 40,
        paddingHorizontal: 40,
        paddingVertical: 20,
        width: '70%',


    },
    onOff: {

        borderRadius: 30,
        backgroundColor: '#FAECD6',
        paddingHorizontal: 40,
        marginBottom: 5
    },
    onOffCircle: {
        borderRadius: 30,
        backgroundColor: '#B05A7A',
        paddingHorizontal: 13,
        paddingVertical: 3
    },
    switch: {
        height: 20,
        width: 80,
        backgroundColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center'
    },
    circleOnDeck: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: 'red'
    },
    circleOffDeck: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: 'red',
        alignSelf: 'flex-end'
    }
})
export default Styles