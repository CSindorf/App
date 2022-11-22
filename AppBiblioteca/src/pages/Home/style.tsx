import { StatusBar, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#997ae6',
    //marginTop: StatusBar.currentHeight || 0,
    paddingTop: 6
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});