/* eslint-disable prettier/prettier */


import React, { Component } from 'react';
import { Text, KeyboardAvoidingView ,TextInput,Image,TouchableOpacity,Animated , View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import styles from '../style/Login';

const One = ({navigation}) =>{

const onPressH = ()=> {
   navigation.replace('Apps');
}

   return (
      
      <KeyboardAvoidingView style={styles.body}>

      <View>
          <Image
              source ={ require('../logo/phone_plus.png')}
              style={styles.logo}   
      />
      </View>
     
      <View>

      <TextInput
         placeholder = 'Digite o seu E-mail'
         style={styles.txtinput}
      />
      <TextInput
      secureTextEntry
         placeholder = 'Digite sua Senha'
         style={styles.txtinput}
      />

      </View>
    
<TouchableOpacity
      style={styles.botao}
      
      onPress = {onPressH}
      > 
         <Text 
          style={styles.txtbotao}
          > LOGIN  </Text>

      </TouchableOpacity>

   </KeyboardAvoidingView>

   );
}

export default One;