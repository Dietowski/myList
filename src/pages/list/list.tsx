import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import './listStyles';
import { style } from './listStyles';
import { useState } from 'react';

export default function Lists() {

    const [pesquisa, setPesquisa] = useState('');

    return(
        <View style={style.container}>
            <View style={style.rowInitial}>  {/* ROW INICIAL */}
                <TouchableOpacity>
                    <MaterialIcons 
                        name='menu'
                        size={30}
                        color={themes.colors.gray}
                    />
                </TouchableOpacity>
                <Text style={style.textRowInitial}>Mouseion</Text>
                <View style={style.rightIcons}>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='notifications-none'
                            size={30}
                            color={themes.colors.gray}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons 
                            name='account-circle'
                            size={30}
                            color={themes.colors.gray}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{alignItems:'center', justifyContent: 'center', paddingVertical: 31}}>  {/* ROW CUMPRIMENTOS */}
                <Text style={{fontSize:20}}>Olá usuário, qual livro vai ler hoje?</Text>
            </View>
            <View style={style.boxRowInput}>
                <View style={style.rowInput}>  {/* ROW BARRA DE PESQUISA */}
                    <TextInput
                        placeholder='Livro'
                        placeholderTextColor={themes.colors.gray}
                        value={pesquisa}
                        onChangeText={setPesquisa}
                    />
                    <TouchableOpacity onPress={() => setPesquisa('')}>
                        <MaterialIcons 
                            name='clear'
                            size={16}
                            color={themes.colors.gray}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View>  {/* ROW CATEGORIA 1 */}
                <View style={style.rowCategoriaNome}>
                    <Text style={{fontSize:24}}>Matemática</Text>
                    <TouchableOpacity>
                        <MaterialIcons 
                            name='arrow-forward-ios'
                            size={16}
                            color={themes.colors.gray}
                            style={{paddingVertical: 10}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.containerLivros}> {/* ROW CARD LIVROS */}
                <Text>AA</Text>
            </View>
        </View>
    );
}