import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    containerLivros: {
        flexDirection: 'column',
        backgroundColor: themes.colors.lightGray,
        borderRadius: 15,
        height: Dimensions.get('window').height / 5,
        width: Dimensions.get('window').width / 1.1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    columnLivro: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 23
    },
    columnInfoLivro: {
        flexDirection: 'column',
        gap: 5,
        alignItems: 'flex-start'
    },
    titleBook: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    authorBook: {
        fontSize: 16
    },
    boxButton: {
        alignSelf: 'flex-end',
        paddingHorizontal: 12
    }
});