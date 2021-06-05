/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {
   DrawerContentScrollView,
   DrawerItem
} from '@react-navigation/drawer';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const DrawerContainer = (props)=>{
   return(
      
      <View style={{flex: 1}} >
         <DrawerContentScrollView {...props}>
            <View>
               <Text> Test! </Text>
            </View>
         </DrawerContentScrollView>

         <DrawerItem
            label = 'Sign Out'
         />

      </View>
   )
}

export default DrawerContainer;
const styles = StyleSheet.create({})
