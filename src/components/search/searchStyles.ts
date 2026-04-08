import { StyleSheet } from "react-native";
import { themes } from '../../global/themes';

export const style = StyleSheet.create({
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
});