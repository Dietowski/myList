import { StyleSheet } from "react-native";
import { themes } from '../../global/themes';


export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.bgScreen,
    },
    rowResultado: {
        paddingTop: 31,
        flexDirection: 'row',
        gap: 5,
        paddingHorizontal: 10,
        paddingBottom: 31,
    },
});