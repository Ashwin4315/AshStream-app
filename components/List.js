import { FlatList,StyleSheet} from "react-native";

function List({children}) {
    return ( 
            <FlatList
                data={[]}
                renderItem={null}
                ListHeaderComponent={
                    <>{children}</>
                }
            />
        )
}

export default List;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    }
})