/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image,TouchableOpacity, TextInput} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer,DarkTheme } from '@react-navigation/native';

import Login from './main/Login';
import Apps from '../App';
import HospitalScreen from './HospitalScreen';

const Stack = createStackNavigator();

const MainP = () =>{
   
   return(
      <NavigationContainer>
         <Stack.Navigator>

            <Stack.Screen
               name='Login'
               component={Login}
                options ={
            {
               header : ()=> null
            }
         }
            />
            

            <Stack.Screen
               name='Apps'
               component={Apps}
               options ={
            {
               header : ()=> null
            }
         }
            />


         </Stack.Navigator>

      </NavigationContainer>
   );
}
export default MainP;


const styles = StyleSheet.create({

   footer:{

      flex: 2,
      height: 100,
      backgroundColor: '#d3d3d3',
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,   
      
   },
   txtinput:{
      
      left: 20,
      top: 50,
      borderBottomWidth: 1,
       width: 350,
       borderBottomColor: 'grey',
       marginBottom: 10,
       fontWeight: 'bold',
       fontSize: 15

   }

})