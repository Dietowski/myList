import React, { useState } from "react";
import { style } from "./style";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import Logo from '../../assets/images/logo.png'
import {MaterialIcons} from '@expo/vector-icons';
import { themes } from "../../global/themes";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordSecure, setIsPasswordSecure] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);

            if(!email || !password){
                setLoading(false);
                return Alert.alert('Cuidado', 'Preencha os campos obrigatórios!');
            }

            setTimeout(()=> {
                Alert.alert('Parabéns', 'Logado com sucesso');
                setLoading(false);
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.title}>Mouseion</Text>
                <Image  style={style.logo}
                source={Logo}
                resizeMode="contain" />
                <Text style={style.textInitial}>Comece a estudar na nossa biblioteca virtual agora mesmo. Mouseion tem todo livro e apoio aos universitários.</Text>
            </View>
            <View style={style.boxMid}>
                <View style={style.boxInput}>
                    <TextInput style={style.input}
                        placeholder="Insira seu e-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <MaterialIcons 
                        name="email"
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>
                <View style={style.boxInput}>
                    <TextInput style={style.input}
                        placeholder="Insira sua senha"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={isPasswordSecure}
                    />
                    <TouchableOpacity onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                        <MaterialIcons 
                            name={isPasswordSecure ? 'visibility' : 'visibility-off'}
                            size={20}
                            color={themes.colors.gray}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.button} onPress={()=>
                    navigation.navigate('Lists')}>
                    {
                        loading?
                            <ActivityIndicator color={themes.colors.primary} size={'small'} />
                        :
                        <Text style={style.textButton}>Fazer login na conta</Text>
                    }
                </TouchableOpacity>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Text style={style.textBottom}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}