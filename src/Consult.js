/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Text, Image,StyleSheet, View,TouchableOpacity, TextInput ,Button, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CircleCheckBox ,{LABEL_POSITION} from 'react-native-circle-checkbox';


const ConsultScreen = ({navigation}) => {

      const [hospitalName, setHName] = useState('Sagrada Esperança')

      return (

         <View style ={styles.body}>

            <View style={styles.head}>

            </View>


            <View style={styles.Top}>

               <TextInput
                  placeholder= 'TType something'
               />

            </View>

               <View style={{
      
               height: 40,    
               marginBottom: 16,
               flexDirection: 'row',
                  
            }}>
                                 

            <View style={{flex:1,
                     height: '100%',
                     paddingLeft:16,      
                     backgroundColor: '#fff' ,
                     elevation: 5,  
                     borderRadius: 8,
                     
                     }}>

               <TextInput
                  placeholder= 'Type or not'
                    
               />

            </View>
               
            <View style={{
                     
                     flex:1,
                     height: '100%',
                     elevation: 5,
                     backgroundColor: '#fff',
                     borderRadius: 8,
                     borderRigthWidth: 2,
                     borderRightColor: '#152642',
                     paddingLeft:16,   

                     }}>

               <TextInput
                  placeholder= 'Type something'
                  
               />

            </View>

               </View>
               

                  
            <View style={styles.Top}>
               <TextInput
                  placeholder= '18/01/2002'
                  style ={{fontSize: 16,}}
               />
            </View>
                  
            <View style={styles.Top}>
               <TextInput
                  placeholder= 'Type YOUR AGE'
                  style ={{
                     fontFamily: 'sansSerif'
                  }}
               />
            </View>
                  
            <View style={styles.TopObs}>
               <TextInput
                  placeholder= 'OBS '
                  style ={{
                     fontFamily: 'sansSerif'
                  }}
               />
            </View>
                  
            <View style={styles.Top} >
               <TextInput
                  placeholder= 'Type NOTHING'
                  style ={{
                     fontFamily: 'sansSerif'
                  }}
               />
            </View>

         </View>
      );
}
export default ConsultScreen;

const styles = StyleSheet.create({

   body:{

      flex: 1,
      backgroundColor:'#fff',
      padding: 10,
      
   },

   head:{

      height: '20%',
      width:'100%',
      backgroundColor: '#152642',
      marginBottom: 32,
      marginTop: 16,
      borderRadius: 8,
      elevation: 5

   },
   
   Top:{
     
      paddingLeft:16,
      borderRadius: 8,
     height: 40,
      backgroundColor:'#fff',
      marginBottom: 16,
      elevation:5

   },
   
   TopObs:{
     
      paddingLeft:16,
      borderRadius: 8,
      height: 80,
      backgroundColor:'#fff',
      marginBottom: 16,
      elevation:5

   },

   imagem:{

      flex:1,
      backgroundColor:'#fff',

   },

   content:{

      
      width:250,
      paddingTop: 30,
      paddingLeft: 10,
      backgroundColor:'#fff',

   }
})
