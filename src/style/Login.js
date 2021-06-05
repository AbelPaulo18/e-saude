/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  
   body:{
      flex: 1,
      backgroundColor: '#a91b0d',
      justifyContent: 'center',
      alignItems:'center',
      fontFamily: 'sans-serif'
   },
   txtinput:{
      marginTop: 8,
      width: 250,
      height:50,
      paddingLeft: 20,
      borderRadius: 10,
       backgroundColor:'white',

   },
   botao:{
      marginTop: 8 ,
      backgroundColor: '#f2f3f4',
      width: 200,
      height:45,
      borderRadius:10,
      justifyContent: 'center',
      alignItems:'center',
   },
   txtbotao:{
      fontWeight: 'bold',
      color: '#a91b0d',
      fontSize: 18
   },
  
   logo:{
      width: 200,
      height: 200,
      opacity: 1,
      tintColor:'#f2f3f4',
   }

})
export default styles;