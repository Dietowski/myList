import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { themes } from '../../global/themes';
import { style } from './headerStyles'

export default function Header() {
    return(
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
    )
}