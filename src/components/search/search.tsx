import { style } from './searchStyles'
import { themes } from '../../global/themes';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

type SearchProps = {
    placeholder: string;
}

export default function Search({ placeholder }: SearchProps) {

    const [pesquisa, setPesquisa] = useState('');

    return (
        <View style={style.boxRowInput}>
            <View style={style.rowInput}>  {/* ROW BARRA DE PESQUISA */}
                <TextInput
                    placeholder={placeholder}
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
    )
}
