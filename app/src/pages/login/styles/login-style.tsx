

 import {
   StyleSheet
 } from 'react-native';
 
 const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "space-between",
        height: '100%',
        alignContent:'center'
      },
      textTitle: {
        color: "#FAEEE7",
        fontSize: 32,
        lineHeight: 36,
        fontWeight: "bold",
        textAlign: "left",
        marginLeft: 40,
        marginTop: 100,
      },
      textSubTitle: {
        color: "#FFFDDE",
        fontSize: 16,
        lineHeight: 30,
        textAlign: "left",
        marginLeft: 40,
      },
      logiButton: {
        marginBottom: 60,
        flex:1
      },
      logiButtonText: {
        color: "#000000",
        fontSize: 28,
        lineHeight: 40,
        height: 40,
        textAlign: "center",
        width:'40%',
        backgroundColor: '#FAEEE7',
        opacity: 0.8

      }
 });

 export default styles;

 