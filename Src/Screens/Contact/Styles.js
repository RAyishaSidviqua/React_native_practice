import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#E9E8E8',
        paddingTop: 20,
        flex: 1,
    },
    subContainer: {
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
        backgroundColor: '#E9E8E8',
        height: '100%',
        marginTop: 60,
        paddingTop: 20,
        paddingHorizontal: 20,
        flex: 1
    },
    circle: {
        borderRadius: 50,
        height: 50,
        width: 50,
        marginRight: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleHed: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderWidth: 2,
        width: '70%'
    },
    backView: {
        margin: 20
    },
    bgImg: {
        backgroundColor: '#3D1766',
        opacity: 0.7,
        height: '100%',
        width: '100%',
    },
    userText: {
        height: 20,
        width: 20,
    },
    AddContact: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        // marginHorizontal: 40,
        // marginBottom: 100
    },
    addText: {
        textDecorationLine: 'underline',
        fontWeight: '600',
        color: '#000',
        marginLeft: 5
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        elevation: 7,
        marginVertical: 15
    },
    text: {
        fontSize: 20,
        color: '#000',
        fontWeight: '600'
    },
    SingleIconView: {
        borderRadius: 30,
        borderWidth: 2,
        padding: 8,
        backgroundColor: '#3D1766',
    },
    iconStyle: {
        height: 15,
        width: 15,
    },
    iconsView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderWidth: 2,
        width: '30%'
    },
    alertBox: {
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 30,
        padding: 40,
        elevation: 7

    },
    noData: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    inputText: {
        borderWidth: 2,
        marginBottom: 20,
        padding: 10
    },
    close: {
        alignItems: 'flex-end',
        marginBottom: 20
    },
    submitButton: {
        borderWidth: 2,
        width: '30%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#3D1766',

    },
    error: {
        color: 'red',
        alignSelf: 'center'
    }
})
export default Styles