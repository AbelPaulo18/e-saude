/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text,Image,TouchableOpacity,Platform,ScrollView ,StyleSheet, View } from 'react-native';
import Header from '../Header'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const LocationMap = ({navigation, location})=> {
console.log("HELLO",location)

   return(
<View style={styles.body}>

               
<Header navigation={navigation} />
      <View style={styles.container}>
      <MapView
         // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
      </View>

         <ScrollView style={{flex: 1, borderTopWidth: 1, borderColor: '#eee'}}>
            <View style={styles.LocalInfo}>
 
               
                  <Text style={styles.priTxt}> Main text or Primary text </Text>
                  <Text style={styles.secTxt}> Description............ </Text>
               

            </View>
         </ScrollView>
      
   </View>
   )
}
export default LocationMap;

const styles = StyleSheet.create({
   body:{
      
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignContent: 'center'
      
   },
   
   header:{

      padding: 8,
      width:'100%',
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS == 'ios'? 16 : 0,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomColor: '#ddd',

   },
   container: {
      
      height: 440,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },

   Map:{

      flex: 2,
      backgroundColor: '#f2f3f4',
      borderBottomWidth: 1,
      borderColor: '#cccc'
   },

   LocalInfo:{
      
      flex: 1,
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: 5,
      marginTop: 40,
      padding: 5,
      
   },

   pop:{

      height: 80,
      width: '40%',
      backgroundColor: '#fff',
      elevation: 3,
      position: 'absolute',
      left: '30%',
      bottom: '25.5%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      borderRadius: 8,
      padding: 6,

   },
   info: {

      marginBottom: 4,
      backgroundColor: '#eee',
      height: 130,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
      
   },
   menuIcon:{

      
      backgroundColor: '#eee',
      borderRadius: 4,
      justifyContent: 'center',
   
   },
   secTxt: {

      fontSize: 13

   },
  
   priTxt: {

      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'capitalize',
      marginBottom: 8

   },
   
})
