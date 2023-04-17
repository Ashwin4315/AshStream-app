import {ActivityIndicator, StyleSheet,View} from 'react-native';

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#5CE0E6" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"black",
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  }

});

export default Loader;