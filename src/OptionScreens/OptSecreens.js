/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {createStackNavigator  } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native-animatable';
import PerfilScreen from './Perfil';

const Option = createStackNavigator;

const OptScreens = ()=> {
    return(
        <NavigationContainer>
            <Option.Navigator>
                
                <Option.Screen
                    name= 'ProfileScreen'
                    component= {PerfilScreen}
                    options ={
                    {
                          header: ()=> null
                     }
                    }
                />
            
            </Option.Navigator>
        </NavigationContainer>
    )
}

export default OptScreens;