/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, View,Platform,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'

const Settings = ({navigation})=> {
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

         <View style={styles.userOptions}>
          <View style={{ borderRightWidth: 1, borderColor: 'grey', paddingRight: 8 }}>
            <Image style={styles.photo}
               source={require('../../../Images/Us.jpg')}
            />
          </View>
            <View style={styles.userDescription}>
               <Text> Username </Text>
                  <Text> e-mail </Text>
            </View>
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
      backgroundColor: '#fff',
      borderColor: 'grey',
      height: 70,
      borderBottomWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8
   },
   photo:{
      width: 60,
      height: 60,
      borderRadius: 100,
   }
})
