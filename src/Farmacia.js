/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Image, Text,StyleSheet,TextInput, Platform,View, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Farmacy = ({navigation})=>{

   const [searchActive, setSearchActive ] = useState(false)

   return(
      
      <KeyboardAvoidingView style={styles.body}>

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
      source={require('./logo/phone_plus.png')}
      style={{
         height: 32,
         width: 32
      }}
   />
<Text>é-Saúde</Text>

</View>

<TouchableOpacity style={{
   alignItems: 'center',
   justifyContent:'center'
}} 
   onPress={()=> setSearchActive(!searchActive)}
>
   <Feather
      name = 'search'
      size={32}
   />
</TouchableOpacity>


</View>

{
              searchActive ? (
                 
               <View style={styles.containerSearch}>
               <TextInput
               style={styles.Search}
                  placeholder= 'Pesquisar '
               />
               </View>

              )
              :
              null
           }


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
      paddingLeft: 5,
      paddingRight: 5, 
      
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
   containerSearch:{
      
      width: '100%',
      justifyContent:'center',
      alignItems: 'center',
      padding: 8,
      marginTop: 8,
     
   },

   Container_search:{
   
      height: 40,
      width: '100%' ,
      paddingLeft:16,
      paddingRight:16,
      marginBottom: 30,
      flexDirection: 'row'

   },
   Search:{
      backgroundColor: '#fff',
      width: '80%',
      paddingLeft: 16,
      height: 40,
      borderBottomWidth: 2,
      borderRadius: 4,
      elevation: 5,
      borderBottomColor: 'lightgreen'
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
