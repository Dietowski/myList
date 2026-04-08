import { View, Text } from "react-native";
import Header from "../../components/header/header";
import Search from "../../components/search/search";
import CardBook from "../../components/card-book/cardBook";
import { style } from "./resultStyle";

export default function Result() {
    return (
        <View style={style.container}>
            <Header />
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 31 }}>
                <Search placeholder="Nome do livro" />
            </View>
            <View style={style.rowResultado}>
                <Text style={{ fontSize: 24 }}>Resultados: </Text>
            </View>
            <CardBook />
        </View>
    )
}