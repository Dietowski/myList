import { themes } from '../../global/themes';
import { StyleSheet } from 'react-native';

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
    },
    textRowInitial: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    rightIcons: {
        flexDirection: 'row',
        gap: 16
    },
});