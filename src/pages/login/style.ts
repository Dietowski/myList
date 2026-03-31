import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.bgScreen,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20,
    },
    logo: {
        width: 139,
        height: 109,
    },
    textInitial: {
        fontSize: 16,
        marginTop: 30,
        width: '85%',
        textAlign: 'center'
    },
    boxMid: {
        padding: 28,
        gap: 15,
        height: Dimensions.get('window').height/4,
        width: '100%',
        paddingHorizontal: 40,
        alignItems: 'center',
    },
    boxInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 59,
        borderWidth: 1,
        borderRadius: 25,
        borderColor: themes.colors.gray,
        backgroundColor: themes.colors.lightGray,
    },
    input:{
        height: '100%',
        width: '90%',
    },
    button: {
        width: 227,
        height: 55,
        backgroundColor: themes.colors.secondary,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        color: themes.colors.primary,
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBottom: {
        fontSize: 15,
        textDecorationLine: 'underline',
    }
})