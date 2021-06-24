/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Image, Text,StyleSheet,TextInput, Platform,View, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import TimedSlideshow from 'react-native-timed-slideshow';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Farmacy = ({navigation})=>{

   const [searchActive, setSearchActive ] = useState(false)

   const [data, setData] = useState([
      {
       uri: require('../Images/F1.jpeg'),
       title: 'Panadol 500mg',
       text: 'Farmácia Dos Anjos'
      },
      {
       uri: require('../Images/F2.jpeg'),
       title: 'Amoxaciclina 250mg',
       text: 'Farmácia Orquídea'
      },
      {
       uri: require('../Images/F3.jpeg'),
       title: 'Paracetamol',
       text: 'Mais vendido da Semana'
      },
      {
       uri: require('../Images/F4.jpeg'),
       title: 'Cloridrato Genérico',
       text: 'Farmácia Lz'
      },
    ])

   const [pharmacy, setpharmacy] = useState([
      { 
         name: 'Farmácia dos Anjos',
         disponibilidade: '24/24',
         endereco: 'Belas, Talatona, Luanda',
         estado: 'Aberto'
      },
      {
         name: 'Farmácia da Leoníldia',
         disponibilidade: '24/24',
         endereco: 'Golf 2, Kilamba kiaxi, Luanda',
         estado: 'Aberto'
      },
      {
         name: 'Farmácia do Sammuel',
         disponibilidade: '24/24',
         endereco: 'Calemba 2, Talatona, Luanda',
         estado: 'Aberto'
      },
      {
         name: 'Farmácia Maianga',
         disponibilidade: '24/24',
         endereco: 'Maianga, Maianga, Luanda',
         estado: 'Aberto'
      },
   ])

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

           <View style={{width: '100%', backgroundColor: 'grey',height: 250,marginBottom: 16}}>
              <TimedSlideshow
                 items ={data}
                 extraSpacing = {50}
                 duration ={ 3000 }
                 footerStyle={
                        {
                           height: 130
                        }
                 }
                titleStyle={{
                   fontSize: 24
                }}
                textStyle={{
                   fontSize: 18
                }}
               
              />
            </View>

         <ScrollView>
      {
         pharmacy.map((item,index) =>(
      
      <View style ={styles.Container}>
            <Text style ={styles.title}>
               {item.name}
            </Text>
         
            <Text style ={styles.dxd}>
            Horário : <Text> {item.disponibilidade} </Text>
            </Text>
         
            <Text style ={styles.dxd}>
            Endereço : <Text> {item.endereco} </Text>
            </Text>
         
            <Text style ={styles.dxd}>
            Estado: <Text style={{color: 'lightgreen'}}> {item.estado}</Text>
            </Text>

      </View>
         ))
      }
      </ScrollView>

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
      marginBottom: 50,
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
    
      borderRadius: 8,
      backgroundColor: '#ffffff',
      elevation: 2,
      padding: 8,
      marginBottom: 8

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
