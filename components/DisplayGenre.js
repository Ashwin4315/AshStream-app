import { View,FlatList,StyleSheet} from "react-native";
import GenreCard from "./GenreCard";



function DisplayGenre({genre}) {

        return ( 
        <View style={styles.container}>
            <FlatList
             data={genre}  
             columnWrapperStyle={{
                justifyContent: 'space-around',
              }}
             renderItem={ genreData =>{
                return (
                <GenreCard title={genreData.item.name} id={genreData.item.mal_id}  />
                )}
            }  
            numColumns={2}
             keyExtractor={/*(item)=>{item.mal_id}*/item=>item.mal_id}/>
        </View>
     );
}

export default DisplayGenre;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        width:"100%",
        height:"100%"
    }
})