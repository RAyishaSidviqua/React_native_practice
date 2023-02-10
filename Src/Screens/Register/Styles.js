import { StyleSheet, Dimensions } from "react-native"


const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#674188',
        flex: 1
    },
    backView: {
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 20,
        zIndex: 6,
    },
    arrowText: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    registerText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
    },
    inputfield: {
        elevation: 1,
        padding: 15

    },
    inputfieldAdress: {
        minHeight: 100,
        paddingLeft: 15,
        // paddingTop: 5,
        // height: 100,
        elevation: 1,
        textAlignVertical: 'top'

    },
    subContainer: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 20,
        height: Dimensions.get('screen').height
    },
    NextButton: {
        marginTop: 20,
        width: '50%',
        backgroundColor: '#674188',
        paddingHorizontal: 13,
        paddingVertical: 13,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        borderRadius: 10
    },
    currentLocationHead: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 15
    },
    CurrentLocation: {
        marginLeft: 5,
        fontSize: 17,
        fontWeight: '600',
    },
    errMsg: {
        color: 'red',

    }
})
export default Styles