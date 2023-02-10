import { Dimensions, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    backView: {
        // borderWidth: 2,
        justifyContent: 'center',
        paddingLeft:20,
        paddingTop:20,
        // alignItems: 'center',
        zIndex: 6,
        // marginTop:100
    },
    container: {
        flex: 1,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width    // alignItems: 'center'
    },
    textInput: {
        backgroundColor: '#EEE9DA',
        paddingLeft: 20,
        borderRadius: 10,
        width: '100%',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginTop:10
    },

    genraText1: {
        marginTop: 50,
        alignSelf: 'center'
    },

    btn: {
        borderRadius: 10,
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#913175',
        marginTop: 50,
        alignSelf: 'center'

    },

    img2: {
        // justifyContent: 'flex-end',
        // flex: 1,
        alignSelf: 'center',
        // marginBottom: 5,
    },
    error: {
        color: 'red',
        alignSelf: 'center'
    }
})

export default styles