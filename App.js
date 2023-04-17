import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Home from './screens/Home';
import Detail from './screens/Detail';
import Genre from './screens/Genre';
import AnimeShows from './screens/AnimeShows';
import Search from './screens/Search';
import DrawerSlider from './components/DrawerSlider';

export default function App() {

  const Stack = createStackNavigator()
  const Drawer = createDrawerNavigator()

  const DrawerSlide = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerSlider {...props} />}
        screenOptions={
          {
            headerStyle:{backgroundColor: 'black'},
            drawerStyle:{ backgroundColor:"#131415"},
            headerTintColor:"white",
            drawerInactiveTintColor:"white",
            drawerActiveTintColor:"#5CE0E6",
          
            
          }
        }
      >
        <Drawer.Screen name='Home' component={Home}



        options={( {navigation})=>({
          headerTitle:()=>{
            return <Image 
            source={require("./assets/logo.png") }
            style={{
              resizeMode: 'cover',
              height: 50,
              width: 100,
            }}
            />
         
          },
          headerRight:()=>{ return <FontAwesome  style={styles.right}  name="search" size={24} color="#5CE0E6" onPress={() => navigation.navigate('Search')} />},

          drawerIcon:()=>{ return <Ionicons name="home" size={24} color="#5CE0E6"  />}
        } )}
         />



        <Drawer.Screen name='Genre' component={Genre}
         options={{
          drawerIcon:()=>{ return <MaterialIcons name="category" size={24} color="#5CE0E6" />}
        } }
         />
        <Drawer.Screen name='Search' component={Search}
         options={{
          drawerIcon:()=>{ return <FontAwesome name="search" size={24} color="#5CE0E6" /> }
        } }
         />
      </Drawer.Navigator>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={
            {
              headerStyle:{
                backgroundColor: '#000',
              },
              headerTintColor :"#5CE0E6"            
             
            }
          }
        >
          <Stack.Screen name='drawer' component={DrawerSlide} options={{ headerShown: false }} />
          <Stack.Screen name='detail' component={Detail}  options={{ headerShown: false }} />
          <Stack.Screen name='animeshows' component={AnimeShows} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  right:{
    marginRight:15
  }
});
