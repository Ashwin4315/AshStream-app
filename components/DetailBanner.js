import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";

function DetailBanner({ image, title, type }) {
    return (
            <View
                style={styles.container}>
                <ImageBackground
                    blurRadius={10}
                    source={{
                        uri: image
                    }}
                    style={styles.imgBack}
                >
                    <View style={styles.innerContainer}>
                        <Image
                            source={{
                                uri: image,
                            }}
                            style={styles.img} />
                        <Text style={styles.text}>{title}</Text>
                        <View style={styles.type}>
                            <Text style={styles.text}>Type: {type}</Text>
                        </View>
                    </View>
                </ImageBackground >
            </View>
    );
}

export default DetailBanner;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#181818"
    },
    innerContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.60)',
        justifyContent: "center",
        alignItems: "center"

    },
    imgBack: {
        width: "100%",
        height: 350,

    },
    img: {
        width: 150,
        height: 200,

    },
    text: {
        fontSize: 15,
        textAlign: "center",
        color: "white",
        marginTop: 10,
        fontWeight: "bold",
        paddingHorizontal:10
    },
    
   
})