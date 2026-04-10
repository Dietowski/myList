import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { themes } from '../../global/themes';
import { style } from './listStyles';
import Header from '../../components/header/header'
import Search from '../../components/search/search'
import CardBook from '../../components/card-book/cardBook';
import { useNavigation } from '@react-navigation/native';

export default function Lists() {

    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <Header />
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 31 }}>  {/* ROW CUMPRIMENTOS */}
                <Text style={{ fontSize: 20 }}>Olá usuário, qual livro vai ler hoje?</Text>
            </View>
            <Search placeholder='livro' />
            <View>  {/* ROW CATEGORIA 1 */}
                <View style={style.rowCategoriaNome}>
                    <Text style={{ fontSize: 24 }}>Matemática</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Result')}>
                        <MaterialIcons
                            name='arrow-forward-ios'
                            size={16}
                            color={themes.colors.gray}
                            style={{ paddingVertical: 10 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <CardBook />
        </View>
    );
}