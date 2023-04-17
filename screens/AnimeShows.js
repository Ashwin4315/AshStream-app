import { View,StyleSheet} from "react-native";
import { useState,useLayoutEffect } from 'react';


import useGetAnime from "../hooks/useGetAnime";
import DisplayAnime from "../components/DisplayAnime";
import Loader from "../components/Loader";

function AnimeShows({route,navigation}) {

 
   
   const [page,setPage]=useState(1)
   const link=route.params.link
   const title=route.params.title
   
   const [animeShows,count,pages,loading]=useGetAnime(`${link}&page=${page}`)
   
   const pagePress =(type)=>{
      if(type==="prev"){
         setPage(page -1)
      }
      else{
         setPage(page +1)
      }

   }
 
   useLayoutEffect(() => {
      navigation.setOptions({
        title,
      });
    }, [title,navigation]);

   return ( 


      <View style={styles.container}>
         {loading ?<Loader />: <DisplayAnime  
         anime={animeShows} 
          page={page} 
          pages={pages} 
          changePage={pagePress}
          visible={true}
          />}
       
        
      </View>
   
     );
}

export default AnimeShows;


const styles=StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:"black",
       padding:"9%"  

   },
  
})