/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet, View,Image } from 'react-native';
import {
   DrawerContentScrollView,
   DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerContainer = (props)=>{
   return(
      
      <View style={{flex: 1}} >
         <DrawerContentScrollView {...props} style={{width: '100%'}}>

            <View style={{width: '100%', alignItems:'center'}}>
               
            <View style={styles.userInfoContainer}>
             
                   <View style= {styles.userContent}>

                       <View>
                          <Image
                             source={require('../../Images/Us.jpg')}
                             style={{ height: 60, width: 60, borderRadius: 100}}
                          />
                       </View>

                       <View style={styles.userDescription}>
                          <Text style={styles.nameTxt}> UserName </Text>
                          <Text style={styles.desTxt}> userDescription </Text>
                       </View>

                   </View>
          
           </View>

           <View style={styles.markUps}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 <Text style={styles.primary}> marcadas : </Text>
                 <Text style={styles.num} > 2 </Text>
              
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                 <Text style={styles.primary} > pendentes : </Text>
                 <Text style={styles.num} > 1 </Text>
              </View>
           </View>

            <View style={{width: '90%',padding: 8,alignContent: 'center' }}>
            <TouchableOpacity style= {{width: '100%', flexDirection: 'row', alignItems:'center',  marginBottom: 16,borderRadius: 4,padding: 8,borderBottomWidth:1 }} >
              <Icon
                 name = 'home-outline'
                 size = {26}
                 color = {'grey'}
              />

                 <Text style={styles.btnText}> Home </Text>
              </TouchableOpacity><TouchableOpacity style= {{width: '100%', flexDirection: 'row', alignItems:'center',  marginBottom: 16,borderRadius: 4,padding: 8,borderBottomWidth:1 }} >
              <Icon
                 name = 'bookmark-outline'
                 size = {26}
                 color = {'grey'}
              />

                 <Text style={styles.btnText}> Home </Text>
              </TouchableOpacity><TouchableOpacity style= {{width: '100%', flexDirection: 'row', alignItems:'center',  marginBottom: 16,borderRadius: 4,padding: 8,borderBottomWidth:1 }} >
              <Icon
                 name = 'home'
                 size = {26}
                 color = {'grey'}
              />

                 <Text style={styles.btnText}> Contactar SpiderMan </Text>
              </TouchableOpacity>
            </View>
              
              


            </View>

         </DrawerContentScrollView>

         <DrawerItem
            icon ={({size,color}) =>
               <Icon
                  name = 'exit-to-app'
                  size= {23}
                  color={'red'}
               />
            }
            label = 'Sign Out'
         />

      </View>
   )
}

export default DrawerContainer;
const styles = StyleSheet.create({
   userInfoContainer:{
      alignContent: 'center',
      justifyContent: 'center',
      padding: 8,
      width: '90%',
      marginLeft: 5,
      
   },
   userContent:{
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
     
      },
   userDescription:{
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 4,
      marginLeft: 8
   },
   nameTxt:{
      textAlign: 'center',
      textTransform: 'capitalize',
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black'
   },
   desTxt:{
      color: 'grey'
   },
   markUps:{
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems: 'center',
      marginTop: 4,
      borderBottomWidth: 1, 
      width: '90%',
      marginLeft: 5,
      borderColor: '#ccc',
      marginBottom: 32,
      paddingBottom: 8

   },
   primary:{
      textTransform: 'capitalize',
      fontWeight: 'bold',
      fontSize: 16,
      color: 'grey',
   },
   num:{
      color: 'red',
      fontSize: 12.5
   },
   drawerScreens:{
      width: '90%',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
   },
   btnText:{
      fontSize: 16
   }
})
