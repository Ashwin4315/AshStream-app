import { View,Text,StyleSheet} from "react-native";

function DetailInfo({info}) {
    return ( 
        <View style={styles.container}>
            <Text style={styles.name}> {info.title}</Text>
            <Text style={styles.text}><Text style={styles.info}>Type:</Text> {info.type}</Text>
            <Text style={styles.text}><Text style={styles.info}>Episodes:</Text> {info.episodes?info.episodes:"NA"}</Text>
            <Text style={styles.text}><Text style={styles.info}>Status:</Text> {info.status}</Text>
            <Text style={styles.text}><Text style={styles.info}>Airing:</Text> {info.airing?"Yes":"No"}</Text>
            <Text style={styles.text}><Text style={styles.info}>Duration:</Text> {info.duration}</Text>
            <Text style={styles.text}><Text style={styles.info}>Rating:</Text> {info.rating}</Text>
            <Text style={styles.text}><Text style={styles.info}>Score:</Text> {info.score?info.score:"NA"}</Text>
            <Text style={styles.text}><Text style={styles.info}>Favorites:</Text> {info.favorites}</Text>
            <Text style={styles.text}><Text style={styles.info}>Synopsis:</Text>   {info.synopsis}</Text>
        </View>
     );
}

export default DetailInfo;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
        padding:10
    },
     text:{
        fontSize:12,
        color:"white",
        paddingBottom:13,

    },
     info:{
        fontSize:14,
        color:"grey",
        fontWeight:"900",
        paddingBottom:13,

    },
     name:{
        fontSize:22,
        color:"white",
        paddingBottom:13,
        textAlign:"center"

    },
})