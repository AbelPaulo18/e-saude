/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Image, Text,StyleSheet,TextInput, View, TouchableOpacity,KeyboardAvoidingView } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Farmacy = ()=>{

   const [searchActive, setSearchActive ] = useState(false)

   return(
      
      <KeyboardAvoidingView style={styles.body}>

      <View style={styles.Container_search}>

         <TextInput
            placeholder = 'Talk your thing'
            style ={styles.search}            
         />
         <TouchableOpacity style={styles.botao}>
            <Image
            source={require('../Images/search.png')}
            resizeMode = 'contain'
            style={{
               height: 30,
               width: 30,
               tintColor: '#081B33'
            }}
         />
         </TouchableOpacity>
         
      </View>

      <View style ={styles.Container}>

         
            <Text style ={styles.title}>
               Abel Paulo Farmacy
            </Text>
         
            <Text style ={styles.dxd}>
            Horário : 14/7
            </Text>
         
            <Text style ={styles.dxd}>
            Endereço : 
            </Text>
         
            <Text style ={styles.dxd}>
            Estado: <Text style={{color: 'lightgreen'}}>Aberto</Text>
            </Text>

      </View>

      <View style ={styles.Container}>

         
            <Text style ={styles.title}>
               Abel Paulo Farmacy
            </Text>
         
            <Text style ={styles.dxd}>
            Horário : 14/7
            </Text>
         
            <Text style ={styles.dxd}>
            Endereço : Blalalalalal
            </Text>
         
            <Text style ={styles.dxd}>
            Estado: <Text style={{color: 'lightgreen'}}>Aberto</Text>
            </Text>
         
         

      </View>

      <View style ={styles.Container}>

         
            <Text style ={styles.title}>
               Abel Paulo Farmacy
            </Text>
         
            <Text style ={styles.dxd}>
            Horário : 14/7
            </Text>
         
            <Text style ={styles.dxd}>
            Endereço : Blalalalalal
            </Text>
         
            <Text style ={styles.dxd}>
            Estado: <Text style={{color: 'lightgreen'}}>Aberto</Text>
            </Text>
         
         

      </View>

      </KeyboardAvoidingView>
   )
}

export default Farmacy;

const styles = StyleSheet.create({

   body: {
      flex: 1,
      backgroundColor:'#fff',
      paddingTop: 20,
      paddingLeft: 10,
      paddingRight: 10, 
      
   },
   Container_search:{
   
      height: 40,
      width: '100%' ,
      paddingLeft:16,
      paddingRight:16,
      marginBottom: 30,
      flexDirection: 'row'

   },
   search:{
      
      flex: 16,
      fontSize: 16,
      backgroundColor: '#fff',
      
      elevation: 5,
      paddingLeft: 16,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8
      
   },
   Container:{
     height: '16%',
      borderRadius: 8,
      backgroundColor: '#fff',
      elevation: 5,
      padding: 8,
      marginBottom: 16

   }, 
   botao:{
      
         flex: 2,
         borderTopRightRadius: 8,
         borderBottomRightRadius: 8,
         height: 40,
         width: '100%' ,
         backgroundColor: '#fff',
         alignItems: 'center',
         justifyContent: 'center',
         elevation: 5,
         borderRightWidth: 1
      
   },
   title: {
      color : 'green',
      fontSize: 19.5,
      fontWeight: 'bold'
   },
   dxd:{
      fontSize: 16,

   }

})
