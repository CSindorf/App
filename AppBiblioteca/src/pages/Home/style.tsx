import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#997ae6',
    //marginTop: StatusBar.currentHeight || 0,
    paddingTop: 6
  },
  item: {
    padding: 10,
    marginVertical: 8,
    //marginHorizontal: 10,
    marginLeft:14,
    borderRadius:5,
    height:175,
    width:175
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: '#997ae6c5',
    padding:10,
    margin:18,
    color: '#ffffff'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 155
  },
});