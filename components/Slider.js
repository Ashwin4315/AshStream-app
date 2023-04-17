import { Dimensions, Text, View,ImageBackground,StyleSheet,Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

function Slider( {data}) {
    const width = Dimensions.get('window').width;
    const sdata = data.slice(0, 8);
    return (
        <View >
            <Carousel
                loop
                width={width}
                height={width / 1.5}
                autoPlay={true}
                data={sdata}
                scrollAnimationDuration={2000}
                renderItem={({ item,index }) => (
                    <ImageBackground
                    blurRadius={6}
                    source={{
                        uri: item.images?.jpg.image_url
                    }}
                    style={styles.imgBack}
                >
                     <View style={styles.innerContainer}>
                        <Image
                            source={{
                                uri: item.images?.jpg.image_url,
                            }}
                            style={styles.img} />
                            <View style={styles.type}>
                        <Text style={styles.text}>{item.title}</Text>
                        <Text style={styles.text}>score: {item.score}</Text>
            
                        </View>
                    </View>
                </ImageBackground >
    
                )}
            />
        </View>
    );
}

export default Slider;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#181818"
    },
    innerContainer: {
        flex:1,
        backgroundColor: 'rgba(0,0,0, 0.60)',
    },
    imgBack: {
        width: "100%",
        height: 350,

    },
    type:{
        flex:1,
        backgroundColor: 'rgba(0,0,0, 0.60)',

    },
    img: {
        width: 150,
        height:200

    },
    text: {
        fontSize: 13,
        color: "white",
        marginTop: 10,
        fontWeight: "bold",
        marginLeft:9

    },
    
   
})