import { StyleSheet } from 'react-native'
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
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#FFCEFE'
    },
    card: {
        backgroundColor: '#fff',
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10

    },
    num: {
        borderWidth: 2,
        borderRadius: 100,
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        flexDirection: 'row',
        margin: 5
    },
    likeText: {
        padding: 5
    },
    favImg: {
        height: 30,
        width: 30
    },
    imgg1: {
        borderRadius: 40,
        backgroundColor: 'blue',
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgg2: {
        height: 30,
        width: 30,
    },


    text1: {
        fontSize: 15,
        color: '#000',
        fontWeight: "800"
    },
    text2: {
        fontSize: 15,
        color: '#000',

    },
    deleteIcon: {
        height: 24,
        width: 24
    },
    noDataFoundText: {
        fontSize: 30,
        color: '#000',
        alignSelf: 'center',
        marginTop: '50%'
    },
    number: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff'
    }
})

export default Styles