/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text,Image,TouchableOpacity,Platform,ScrollView ,StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';


const LocationMap = ({navigation})=> {
   return(
<View style={styles.body}>
<View style={styles.header}>

   <TouchableOpacity style={{
      alignItems: 'center',
      justifyContent:'center'
   }}
   onPress ={()=>{navigation.openDrawer()}}
    >
      <Feather
         name = 'menu'
         size={32}
      />
   </TouchableOpacity>


   <View style={{
      alignItems: 'center',
      justifyContent:'flex-end'
   }}>
      <Image
         source={require('../logo/phone_plus.png')}
         style={{
            height: 32,
            width: 32
         }}
      />
        <Text>é-Saúde</Text>

   </View>

         
      <FontAwesome5Icon
         name = 'fire'
         size={32}
      />

</View>


               <View style={styles.pop}> 
                  <Text> Map Info Like :: </Text> 
                  <Text> Description and other cool things</Text> 
               </View>

      <View style={styles.Map}>
      <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
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

      elevation: 1,
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
