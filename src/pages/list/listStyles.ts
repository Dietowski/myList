import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.bgScreen,
    },
    rowInitial: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        paddingTop: 32,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    textRowInitial: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    rightIcons: {
        flexDirection: 'row',
        gap: 16
    },
    boxRowInput: {
        alignItems: 'center',
    },
    rowInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
        width: 239,
        height: 40,
        backgroundColor: themes.colors.primary,
        borderRadius: 50,
    },
    rowCategoriaNome: {
        paddingTop: 31,
        flexDirection: 'row',
        gap: 5,
        paddingHorizontal: 10,
    },
    containerLivros: {
        backgroundColor: themes.colors.lightGray,
        borderRadius: 15,
        height: 165,
        width: 340,
        alignSelf: 'center',
    }
});