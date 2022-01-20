

 import React from 'react';
 import {
   Text,
   View,
   StyleSheet,
   ImageBackground,
   StatusBar,
   Button,
   TouchableWithoutFeedbackBase,
   TouchableHighlight
 } from 'react-native';

 import styles from "./../styles/login-style";
 
 const image = require("../../../../../app/assets/images/app-background.jpg");

 export type Props = {}

 const Login: React.FC<Props> = () => {

    const onLogin = () => {
        console.log("User Tapped Loging");
    }

    return (
        <View style={styles.container}>
        <StatusBar translucent backgroundColor='transparent' />
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View>
                <Text style={styles.textTitle}>Book Cart</Text>
                <Text style={styles.textSubTitle}>Buy and Sale second hand books..</Text>
            </View>
            <TouchableHighlight onPress={() => onLogin()}>
                <View style={styles.logiButton} >
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}} >
                    <Text style={styles.logiButtonText}>LogIn</Text>
                    </View>
                    
                </View>
            </TouchableHighlight>
        </ImageBackground>
      </View>
       );
 }

 export default Login;

 