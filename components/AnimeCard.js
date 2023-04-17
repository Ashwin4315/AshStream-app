import {Pressable,View,Text,Image,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";


function AnimeCard({title,image,id,type,rating}) {

  const navigation=useNavigation();

  const GotoDetail=()=>{
    navigation.navigate("detail",{anime:id})
  }


    return ( 
      <Pressable 
      android_ripple={{color: 'grey'}}
      style={styles.container}
      onPress={GotoDetail}>
        <View>
        <Image
          source={{
            uri: image,
          }}
          style={styles.img}
        />
        <View style={styles.type}>          
          <Text style={styles.text}>{type}</Text>
          <Text style={styles.text}>{rating}</Text>
        </View>
        <Text style={styles.text}>{title}</Text>

        </View>
        </Pressable>
     );
}

export default AnimeCard;

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#181818",
        minWidth:150,
        maxWidth:150,
        marginRight:15,
        marginVertical:15

    },
    text:{
        fontSize:13,
        color:"white",
        paddingBottom:13,
        textAlign:"center",
        padding:5


    },
    img:{
      width: "100%",
      height: 200
    },
    type:{
      flexDirection:"row",
      justifyContent:"space-between",
    },

  
})