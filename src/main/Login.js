/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Front from '../main/Front';
import LogScreen from '../main/Signlog';
import Apps from '../../App';
import SignIn from './SignIn';



const Stack = createStackNavigator ();

const Login = ()=>{

   return(
     <NavigationContainer
     independent={true}
     >
         <Stack.Navigator>

            <Stack.Screen
               name='Front'
               component = {Front}
               options ={
                  {
                     header : ()=> null
                  }
               }
            />

            <Stack.Screen
               name='LogScreen'
               component = {LogScreen}
               options ={
                  {
                     header : ()=> null
                  }
               }
            />
            <Stack.Screen
               name='SignIn'
               component = {SignIn}
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
   )
}


export default Login;