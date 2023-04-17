import { StyleSheet, ScrollView, View } from "react-native";

import useGetAnime from "../hooks/useGetAnime";
import DetailBanner from "../components/DetailBanner";
import DetailInfo from "../components/DetailInfo";
import Loader from "../components/Loader";


function Detail({ route }) {

   const anime = route.params.anime
   const [Detail,count,pages,loading] = useGetAnime(`https://api.jikan.moe/v4/anime/${anime}`)

   return (
      <View style={styles.container}>

      
         {loading ?<Loader />:<ScrollView >
         <DetailBanner
               image={Detail.images?.jpg.image_url}
               title={Detail.title}
               score={Detail.score}
               type={Detail.type} />
               <View style={styles.detail}>
               <DetailInfo info={Detail}/>
               </View>
               </ScrollView>
         }
      
      </View>

   );
}

export default Detail;


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor:"#181818"
   },
   detail: {
      padding:20,
   },
   text: {
      fontSize: 44,
      color: "white",
   },

})