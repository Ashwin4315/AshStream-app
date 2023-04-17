import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

function GenreCard({title,id}) {

    const navigation=useNavigation();

    const DisplayAnime=()=>{
        navigation.navigate("animeshows",{
            link:`https://api.jikan.moe/v4/anime?genres=${id}`,
            title,
        })
    }

    return ( 
        <TouchableOpacity 
        style={styles.container} 
        onPress={DisplayAnime}
        >
        <View 
        android_ripple={{color: 'grey'}}
        style={styles.box}>
          <Text style={styles.text}>{title}</Text>
        </View>
        </TouchableOpacity>
     );
}

export default GenreCard;

const styles=StyleSheet.create({
    container:{
        padding:"2%",
        
    },
 
    text:{
        minWidth:150,
        paddingVertical:"10%",
        backgroundColor:"#131415",
        fontSize:15,
        color:"#b8bbbf",
        textAlign:"center",
        borderRadius:10,
    }
  
})