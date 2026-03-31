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
        padding: 32,
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
    rowInput: {
        backgroundColor: themes.colors.primary,
        
    }
});