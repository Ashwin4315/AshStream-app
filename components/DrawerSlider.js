import { ImageBackground,StyleSheet,View,Text,Image} from "react-native";
import { DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';

  

function DrawerSlider(props) {
    return (
      <DrawerContentScrollView {...props}>
            <ImageBackground
                    source={require("../assets/imgbg.png")}
                    style={styles.container}
                   
                >
                  <View style={styles.content}>
                    <Image 
                      source={require("../assets/logo.png")}
                      style={{
                        resizeMode: 'cover',
                        height: 100,
                        width: 200,
                        backgroundColor:"black"
                      }}
                    />
                    </View>  
                </ImageBackground >
        <DrawerItemList {...props} />
        <View style={styles.bottom}>
          <Text style={styles.text}>
            Powered By A2Ashpower
          </Text>
        </View>
      </DrawerContentScrollView>
    );
  }

  export default DrawerSlider;


  const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        width:"100%",
        height:250,
        resizeMode:"contain",
    },
    content:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    bottom:{
      flex:1,
      marginTop:"100%",
      borderTopColor: "#5CE0E6",
      borderTopWidth: 0.5,
      justifyContent:"center",
      alignItems:"center"
     
    },
    text:{
      paddingVertical:20,
      fontSize:10,
        color:"#5CE0E6",
    },
    logo:{
        color:"white",
        fontSize:32,
        fontWeight:"bold"
    },
    
})