import { View,StyleSheet } from "react-native";

import useGetAnime from "../hooks/useGetAnime";
import DisplayGenre from "../components/DisplayGenre";

function Home() {
 
   const [Genre]=useGetAnime("https://api.jikan.moe/v4/genres/anime")
   
 
   return ( 
      <View style={styles.container}>
         <DisplayGenre genre={Genre}/>
      </View>
     );
}

export default Home;


const styles=StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:"black"
   },
   
})