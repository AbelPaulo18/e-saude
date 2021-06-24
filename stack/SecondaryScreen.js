/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TriagemScreen from '../main/Triagem';

const Stacks = createStackNavigator ();

   const Blue = ()=> {
      return(

         <NavigationContainer 
         independent={true} >
            <Stacks.Navigator>

               <Stacks.Screen
         
               name='Tri'
               component = {TriagemScreen}
               options ={
                  {
                     header: ()=> false
                     
                  }
               }
            />
            </Stacks.Navigator>
         </NavigationContainer>

      );
   }
   export default Blue;