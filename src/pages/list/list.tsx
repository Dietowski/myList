import { View, Text, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import './listStyles';
import { style } from './listStyles';

export default function Lists() {

    return(
        <View style={style.container}>
            <View style={style.rowInitial}>  {/* ROW INICIAL */}
                <MaterialIcons 
                    name='menu'
                    size={30}
                    color={themes.colors.gray}
                />
                <Text style={style.textRowInitial}>Mouseion</Text>
                <View style={style.rightIcons}>
                    <MaterialIcons
                        name='notifications-none'
                        size={30}
                        color={themes.colors.gray}
                    />
                    <MaterialIcons 
                        name='account-circle'
                        size={30}
                        color={themes.colors.gray}
                    />
                </View>
            </View>
            <View>  {/* ROW CUMPRIMENTOS */}
                <Text>Olá usuário, qual livro vai ler hoje?</Text>
            </View>
            <View style={style.rowInput}>  {/* ROW BARRA DE PESQUISA */}
                <TextInput 
                    placeholder='Livro'
                />
            </View>
            <View>  {/* ROW CATEGORIA 1 */}

            </View>
        </View>
    );
}