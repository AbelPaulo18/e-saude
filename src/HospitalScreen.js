/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { Component, useState } from 'react';
import { TextInput,Text,TouchableOpacity,Image, StyleSheet,ScrollView, View, Platform, Fragment } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import FindScreen from './Consult';

const HospitalScreen = ({navigation}) => {

   const MapPress = () => {
      navigation.navigate('Maps')
   }

   const [searchActive, setSearchActive ] = useState(false)

   const [data, setData] = useState([
      {
         avatar: require('../Images/h2.jpg'),
         title: 'Hospital Geral de Luanda',
         travelTime: 10,
         waitingTime: 25,
         duration: 35,
      },
      {
         avatar: require('../Images/sP.jpeg'),
         title: ' Clínica Sagrada Esperança',
         travelTime: 25,
         waitingTime: 25,
         duration: 50,
      },
      {
         avatar: require('../Images/multiperfil.jpeg'),
         title: 'Clínica Multiperfil',
         travelTime: 20,
         waitingTime: 25,
         duration: 45,
      },
      {
         avatar: require('./logo/phone_plus.png'),
         title: 'Clínica Espírito Santo',
         travelTime: 10,
         waitingTime: 75,
         duration: 85,
      },
      {
         avatar: require('../Images/home.png'),
         title: 'Clínica Abel Paulo',
         travelTime: 40,
         waitingTime: 25,
         duration: 65,
      },
      {
         avatar: require('../Images/settings.png'),
         title: 'Maternidade Lucrécia Paím',
         travelTime: 30,
         waitingTime: 25,
         duration: 55,
      },
   ])

       return (

         <View style ={ styles.body } >


         <View style={styles.header}>

            <TouchableOpacity style={{
               alignItems: 'center',
               justifyContent:'center'
            }}
            onPress={()=>{navigation.openDrawer()}}
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
            
           
            <ScrollView style={{width: '100%', marginTop: 8, marginBottom: 62 }}>
            
               { 
                  data.map( (item, index) => (
                     <TouchableOpacity style={styles.containerItems} key={`${item.title}`} 
                     onPress={MapPress}
                     >

                  <View style={styles.logoItem}>
                     <Image
                        source={item.avatar}
                        style={{
                           width: '90%',
                           height: '90%',
                           borderTopLeftRadius: 4,
                           borderBottomLeftRadius: 4, 
                        }}
                     />
                  </View>

                  <View style={styles.infoItem}>
                     <Text style={{
                        textAlign: 'center',
                      fontSize: 16,
                       fontWeight: 'normal',
                        color: 'lightblue'}}> {item.title} </Text>
                     
                     <Text style={{
                        color: '#7cff01',
                     
                     }}> Aberto </Text>
                  </View>

                  <View style={styles.travelItem}>
                     <Text style={styles.title}> Viagem </Text>
                     <Text style={styles.time}> {item.travelTime} min </Text>
                     <Text style={styles.title} > Espera </Text>
                     <Text style={styles.time}> {item.waitingTime} min </Text>
                  </View>

                  <View style={styles.durationItem}>
                     <Text style={styles.title}> duração total para atendimento </Text>
                     <Text style={styles.timeT}> {item.duration} min </Text>
                  </View>
               </TouchableOpacity>
                  ))
                }

            </ScrollView>

            

         </View>         
   )
}

export default HospitalScreen;

const styles = StyleSheet.create({

   body:{

      alignItems: 'center',
      flex: 1,
      backgroundColor:'#fff',
            
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
      marginTop: 8
   },
   Search:{
      backgroundColor: '#fff',
      width: '80%',
      paddingLeft: 16,
      height: 40,
      borderBottomWidth: 2,
      borderRadius: 4,
      elevation: 5,
      borderBottomColor: 'rgb(22,173,225)'
      },
      containerItems:{

         width: '95%',
         backgroundColor: 'white',
         flexDirection: 'row',
         alignItems: 'center',
         marginBottom: 8,
         marginTop: 8,
         borderRadius: 8,
         elevation: 4,
         alignSelf: 'center'

      },
      
   logoItem: {
      //backgroundColor: '#7152c1',
      height:100,
      flex:2,
      alignItems: 'center',
      justifyContent: 'center'
},

infoItem: {
     
      height:100,
      flex:3,
      justifyContent: 'space-around',
      paddingLeft: 8,
      alignItems: 'center',
      
},

travelItem: {
      
      height:100,
      flex:2,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderLeftWidth: 1,
      borderLeftColor: '#eee'
},

durationItem: {
      
      height:100,
      flex:3,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderLeftWidth: 1,
      borderLeftColor: '#eee'
},



time:{
   fontWeight: 'bold',
   color: 'grey'
},
title: {
   textTransform: 'uppercase',
   color:'#ddd',
   fontSize: 12,
   textAlign: 'left'
},
timeT: {
  fontSize: 22,
  color: 'lightblue',
  fontWeight: 'bold',
 
}

})

