/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, { Component, useState } from 'react';
import { TextInput,Text,TouchableOpacity,Image, StyleSheet,ScrollView, View, Platform, Fragment, Dimensions } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import *as Animatable from 'react-native-animatable';
import TimedSlideshow from 'react-native-timed-slideshow';

const HomeScreen = ({navigation}) => {

   const onPressH = ()=> {
      navigation.navigate('Blue');
   }

   const MapPress = () => {
      navigation.navigate('Maps')
   }

   const [searchActive, setSearchActive ] = useState(false)

   const [data, setData] = useState([
     {
      uri: require('../Images/h2.jpg'),
      title: 'Hospital Geral de Luanda',
      text: 'Rotunda do camama, Luanda'
     },
     {
      uri: require('../Images/multiperfil.jpeg'),
      title: 'Clínica Multiperfil',
      text: 'Endereço'
     },
     {
      uri: require('../Images/sP.jpeg'),
      title: 'Clínica Sagrada Esperança',
      text: 'Belas, Talatona, Luanda'
     },
   ])

       return (

         <View style ={ styles.body } >


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
            
            <View style={{width: '100%', backgroundColor: 'grey',flex: 1}}>
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
            
               <View style={styles.itemContainers}>
                  <TouchableOpacity style={[styles.item, {backgroundColor: 'rgb(22,173,225)'}]} onPress= {MapPress}>
                     <FontAwesome5Icon
                        name = 'hospital'
                        size={40}
                        color= 'white'
                     />

                     <Text style={styles.title}> Hospital </Text>

                  </TouchableOpacity>
                     
                  <TouchableOpacity style={[styles.item, {backgroundColor: '#7cff01'}]} 
                  onPress= {() => {navigation.navigate('Farmacy')}}>
                     <FontAwesome5Icon
                        name = 'pills'
                        size={40}
                        color= 'white'
                     />

                     <Text style={styles.title}> Farmacias </Text>

                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.item, {backgroundColor: '#192734'}]}
                  >
                     <FontAwesome5Icon
                        name = 'plus'
                        size={40}
                        color= 'white'
                     />

                     <Text style={styles.title}> Agendar Consulta </Text>

                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.item, {backgroundColor: '#900603'}]}
                  onPress={onPressH}
                  >
                        <FontAwesome5Icon
                        name = 'ambulance'
                        size={40}
                        color= 'white'
                        />

                     <Text style={styles.title}> Triagem  </Text>

                  </TouchableOpacity>

               </View>

            

            

         </View>         
   )
}

export default HomeScreen;

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
      itemContainers:{

         flex: 1,
         width: '100%',
         flexDirection: 'row',
         alignContent: 'center',
         justifyContent: 'space-around',
         flexWrap: 'wrap',
         marginBottom: 60
      },
      item:{

        
         height: Dimensions.get('window').height/6,
         margin: 8,
         width: '40%',
         backgroundColor: 'gold',
         padding: 16,
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: 4,
         elevation: 2

      },
      title: {

         fontSize: 16,
         fontWeight: 'bold',
         color: 'white',
         
      }
})

