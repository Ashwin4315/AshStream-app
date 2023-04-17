import { View, StyleSheet} from "react-native";

import useGetAnime from "../hooks/useGetAnime";
import DisplayAnime from "../components/DisplayAnime";
import List from "../components/List";
import Slider from "../components/Slider";
import Loader from "../components/Loader";


function Home() {

   const [topShows,count,pages,loading] = useGetAnime("https://api.jikan.moe/v4/top/anime")
   const [UpcomingShows,ucount,upages,uloading] = useGetAnime("https://api.jikan.moe/v4/seasons/upcoming")
   const [airing,acount,apages,aloading] = useGetAnime("https://api.jikan.moe/v4/seasons/now")
 

   return (
      <View style={styles.container}>
         {loading || uloading ?<Loader />
         : <List>
         <Slider data={airing} />
         <View style={styles.list}>
            <DisplayAnime header="Popular Anime" anime={topShows} more={true}  link="https://api.jikan.moe/v4/top/anime?"/>
            <DisplayAnime header="Top Airing" anime={airing} more={true}  link="https://api.jikan.moe/v4/top/anime?"/>
            <DisplayAnime header="Upcoming Anime" anime={UpcomingShows} more={true} link="https://api.jikan.moe/v4/seasons/upcoming?"/>
            </View>
         </List>
         }
     
      </View>   );
}

export default Home;


const styles = StyleSheet.create({
   container: {
      flex:1,
      backgroundColor: "black",
    },
   list: {
      flex:1,
      backgroundColor: "black",
      padding:"9%"  
    },

})