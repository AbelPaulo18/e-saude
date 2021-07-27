/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, View,Platform,Image } from 'react-native'
import Header from '../../Header'
const Settings = ({navigation})=> {

      const Setting = ()=>{
         navigation.navigate('PerfilScreen')
      }
      const primaryColor = '#152642'

      const secondaryColor = '#aaa'

   return(
      <View style={styles.body}>
         <Header navigation={navigation} />
      
       <TouchableOpacity onPress={Setting} style={styles.userOptions} >

         
          <View style={{ paddingLeft: 16, paddingRight: 32, }}>
            <Image style={styles.photo}
               source={require('../../../Images/Us.jpg')}
            />

          </View>
            <View style={styles.userDescription}>
               <Text style={styles.t1}> Abel Paulo Luzemba </Text>
                 <Text style={styles.t2}> abelpaulo.2019@gmail.com </Text>
            </View>
            
         
       </TouchableOpacity>
       <View style={styles.secBody}>
         <TouchableOpacity style={styles.options}>
            <Text style={styles.t1} >
               notificação
            </Text>
            <Text style={styles.t2} >
               Saiba mais sobre a iniciativa dos desenvolvedores
            </Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.options}>
            <Text style={styles.t1} >
               privacidade
            </Text>
            <Text style={styles.t2} >
               Saiba mais sobre a iniciativa dos desenvolvedores
            </Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.options}>
            <Text style={styles.t1} >
               Sobre nós
            </Text>
            <Text style={styles.t2} >
               Saiba mais sobre a iniciativa dos desenvolvedores
            </Text>
         </TouchableOpacity>
         
         
         <TouchableOpacity style={styles.options}>
            <Text style={styles.t1} >
               partilhe
            </Text>
            <Text style={styles.t2} >
               convide um amigo, ou partilhe com seus amigos
            </Text>
         </TouchableOpacity>
         
         </View>
      </View>
   )
}


export default Settings;
const styles = StyleSheet.create({
   body:{
      backgroundColor: '#fff',
      flex: 1,
      
   },
   secBody:{
      padding: 2,
      alignItems:'center'
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
   userOptions:{
     
      borderColor: '#aaa',
      height: 100,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      marginBottom: 32
      
   },
   photo:{
      width: 70,
      height: 70,
      borderRadius: 100,
      alignSelf: 'flex-start'
   },
   t1:{
      fontSize: 20,
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginBottom: 5,
      textTransform: 'capitalize',
      color:'#152642' 
   },
   t2:{
      color: 'grey',
      textTransform: 'capitalize'
   },
   options:{
      marginTop: 18,
      borderColor:'grey',
      borderBottomWidth: 1,
      padding: 16,
      width: '100%',
   }
})
