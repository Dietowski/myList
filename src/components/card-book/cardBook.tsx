import { View, Image, Text, TouchableOpacity } from 'react-native'
import { style } from './cardBookStyles'
import Calculo from '../../assets/images/calculo.png'
import { themes } from '../../global/themes'

export default function CardBook() {

    return (
        <View style={style.containerLivros}>
            <View style={style.columnLivro}>
                <Image
                    source={Calculo}
                    resizeMode='contain'
                />
                <View style={style.columnInfoLivro}>
                    <Text style={style.titleBook}>Cálculo - Volume 1</Text>
                    <Text style={style.authorBook}>James Stewart</Text>
                    <Text style={style.authorBook}>2013</Text>
                </View>
            </View>
            <View style={style.boxButton}>
                <TouchableOpacity style={{
                    backgroundColor: themes.colors.secondary,
                }}>
                    <Text style={{ color: themes.colors.primary, fontSize: 14 }}> Saiba mais </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}