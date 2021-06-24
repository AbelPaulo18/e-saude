/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Text,ImageBackground, StyleSheet, View,Platform, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

const Bookmark = ({navigation})=> {
    
   const [still, setstill] = useState(false)
   const [concluida, setconcluida] = useState(false)

   const finished = ()=>{
      setconcluida(!concluida)
   }
   const pendente = ()=>{
      setstill(!still)
   }
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
                  source={require('../../logo/phone_plus.png')}
                  style={{
                      height: 32,
                      width: 32
                  }}
         />
         <Text>é-Saúde</Text>

         </View>
      </View>
         
         <View style={{flex: 1}}>
      <ImageBackground source={require('../../../Images/B2.png')} style={styles.picture}>          

         <TouchableOpacity style={styles.container} onPress={pendente}>
            <Text style={styles.txtPrimary}> Consultas Pendentes : <Text style={styles.txtSecondary}> 1 </Text></Text>
            <Text style={styles.txtPrimary}> Data limite <Text style={styles.txtSecondary}> 10/01/2021 </Text></Text>
        
         </TouchableOpacity>
         
   <TouchableOpacity style={styles.concluida} onPress={finished}>
            <Text style={styles.txtPrimary}> Concluídas : <Text style={styles.txtSecondary}> 2 </Text> </Text>
   </TouchableOpacity>
        {
           still?(
            <Animatable.View style={styles.infoBox} 
               animation = 'bounceIn'
               duraton = '1500'
            >
         <Text style={styles.title}> Pendentes </Text>
          
            <Text> Consulta a fazer em : <Text style={styles.hospitalName}> Clínica Sagrada Esperança </Text>  </Text>
              
                  <Text> Data de marcação : <Text style={styles.data}>07/01/2021</Text> </Text>
      
            </Animatable.View>
           )
           :
           null
        }

        {
           concluida?(
            <Animatable.View style={styles.infoConcluida} 
               animation = 'bounceIn'
               duraton = '1500'
            >

            <Text style={styles.title}> concluidas </Text>

            <View style={{marginBottom: 8, borderBottomWidth: 1,borderColor:'#aaa'}}>
               <View style={{marginBottom: 8}}>
                     <Text> Consulta feita em : <Text style={styles.hospitalName}> Hospital Maria Pia </Text>  </Text>
                  <View>
                     <Text> Data de marcação : <Text style={styles.data}>02/04/2020</Text> </Text>
                        <View>
                           <Text> Data de finalização : <Text style={styles.data}>10/04/2020</Text> </Text>
                        </View>
                     </View>
                  </View>
               </View>
                 
               <View style={{marginBottom: 8, borderBottomWidth: 1,borderColor:'#eee'}}>
               <View>
                     <Text> Consulta feita em : <Text style={styles.hospitalName}>Clínica estoríl</Text>  </Text>
                  <View>
                     <Text> Data de marcação : <Text style={styles.data}>10/05/2020</Text> </Text>
                        <View>
                           <Text> Data de finalização : <Text style={styles.data}>02/06/2020</Text> </Text>
                        </View>
                     </View>
                  </View>
               </View>
                 
            </Animatable.View>
           )
           :
           null
        }


         </ImageBackground>
         </View>
      </View>
   )
}
export default Bookmark;
const styles = StyleSheet.create({
   body:{
   
      flex: 1,
     
   },
   picture:{
   
      flex: 1,
      resizeMode: 'cover',     
      alignItems: 'center'
   
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
   container:{
      backgroundColor: '#ffff',
      width: '100%',
      padding: 8,
      height: 60,
      borderRadius: 8,
      marginTop: 32,
      elevation: 2,
      marginBottom: 16
   },
   concluida:{
      backgroundColor: 'white',
      padding: 12,
      width: '100%',
      borderRadius: 8,
      elevation: 2,
      marginBottom: 32
   },
   txtPrimary:{
      fontSize: 15,
      fontWeight: 'bold'
   },
   txtSecondary:{
      fontSize: 13,
      fontWeight: 'normal',
      color: 'rgb(22,173,225)'
   },
   infoBox:{
      
      
      width: '90%',
      backgroundColor: '#ffffff50',
      marginTop: 16,
      borderRadius: 4,
      padding: 12,
      
      
   },
   infoConcluida:{
      
      
      width: '90%',
      backgroundColor: '#ffffff50',
      marginTop: 16,
      borderRadius: 4,
      padding: 12,
      
      
   },
   title:{
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 8,
      color: '#152642'
   },
   data:{
      fontWeight: 'bold',
      fontSize: 13,
      color:'rgb(22,173,225)'
   }
})
