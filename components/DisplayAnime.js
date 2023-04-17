import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnimeCard from "./AnimeCard";



function DisplayAnime({ anime, header, page, pages, changePage, visible,more ,link})
 {

    const navigation=useNavigation();


    const showAll=()=>{
       if (more){
        return <View style={styles.header}>
        <Text style={styles.text}>{header}</Text>
        <TouchableOpacity
        onPress={()=>{  navigation.navigate("animeshows",{link,title:header})}}
        >
            <Text style={styles.Vtext}>View more</Text>
        </TouchableOpacity>
        </View>
       }
    }

    const PageNavigate = () => {
        if (visible) {
            return (
                <View style={styles.btn}>
                    {page === 1 ? "" : <TouchableOpacity
                        onPress={() => { changePage("prev") }}
                    >
                        <Text style={styles.page}>prev</Text>
                    </TouchableOpacity>
                    }
                    <Text style={styles.text}>{page}    <Text style={{color:"grey"}}> . . .     {pages}</Text></Text>
                    {page !== pages ? <TouchableOpacity
                        onPress={() => { changePage("next") }}
                    >
                        <Text style={styles.page}>next</Text>
                    </TouchableOpacity> : ""}
                </View>)
        }

    }



return (
    <FlatList
        data={anime}
        numColumns={2}
        renderItem={animeData => {
            return (
                <AnimeCard
                    title={animeData.item.title}
                    image={animeData.item.images.jpg.image_url}
                    id={animeData.item.mal_id}
                    type={animeData.item.type}
                    rating={animeData.item.score}
                />
            )
        }
        }
        keyExtractor={(item) => item.mal_id}
        ListHeaderComponent={showAll }
        ListFooterComponent={PageNavigate}
    />
);

    }
export default DisplayAnime;

const styles = StyleSheet.create({

    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    Vtext: {
        color: "#5CE0E6",
        fontSize: 12,
    },
    btn: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "9%"

    },
    
    page: {
        color: "#5CE0E6",
        fontSize: 15,
        fontWeight: "900"

    },
    header: {
       borderBottomColor:"#5CE0E6",
       borderWidth:1,
       paddingVertical:10,
       flexDirection:"row",
       justifyContent:"space-between"

    },
})