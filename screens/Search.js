import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

import useGetAnime from "../hooks/useGetAnime";
import DisplayAnime from "../components/DisplayAnime";
import Loader from "../components/Loader";


function Search() {

    const [animeShow, setAnimeShow] = useState("")
    const [page, setPage] = useState(1)
    const [anime, results, pages, loading] = useGetAnime(`https://api.jikan.moe/v4/anime?q=${animeShow}&sfw&page=${page}`)

    const fetchAnime = (animeName) => {
        setPage(1)
        setAnimeShow(animeName)
    }

    const clearPress = () => {
        setPage(1)
        setAnimeShow("")
    }
    const pagePress = (type) => {
        if (type === "prev") {
            setPage(page - 1)
        }
        else {
            setPage(page + 1)
        }

    }

    return (
        <View style={styles.container}>

            <View style={styles.inputCon} >
                <TextInput
                    value={animeShow}
                    onChangeText={fetchAnime}
                    style={styles.input} />
                <TouchableOpacity
                    style={styles.inpBtn}
                    onPress={clearPress}
                >
                    <Text style={styles.inptext}>reset</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                {animeShow === "" ?
                    <Text style={styles.text}>Type Some Anime to Search</Text>
                    : <Text style={styles.text}>Results found {results}</Text>
                }
            </View>
            {loading ?<Loader />:<>{animeShow !== "" ?
                <DisplayAnime
                    page={page}
                    pages={pages}
                    anime={anime}
                    visible={true}
                    changePage={pagePress}
                /> : ""
            }</>}
            
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 40
    },
    content: {
        marginTop: 30
    },
    text: {
        color: "white",
        fontSize: 25

    },
    inptext: {
        color: "#5CE0E6",
        fontSize: 15

    },
    input: {
        backgroundColor: "#222222",
        minWidth: 200,
        borderRadius: 4,
        borderColor: "grey",
        borderWidth: 0.5,
        color: "white",
        paddingHorizontal: 10
    },
    inputCon: {
        flexDirection: "row",
        width: "100%",
        gap: 20
    },
    inpBtn: {
        borderColor: "#5CE0E6",
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10
    }
})