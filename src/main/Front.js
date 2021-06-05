/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, Image,StyleSheet, View , TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LogScreen from './Signlog';

const Front = ({navigation})=>{

   const onPressH = ()=> {
      navigation.replace('LogScreen');
   }

   return(

      <View style={{flex: 1, backgroundColor: '#d3d3d3'}}>
            
           <View style={{flex: 2, alignItems: 'center',justifyContent: 'center',}}>
            <Animatable.Image
               animation = 'bounceIn'
               duraton = '1500'
               source={require('../logo/phone_plus.png')}
               style={{width:300, height: 300,}}
            />
            </View>

            <Animatable.View style={styles.footer}
            animation = 'fadeInUpBig'
            duraton = '1500'
            >
               <Text style={{fontSize:25, color: '#152642', fontWeight: 'bold'}}> Bemvindo a plataforma é-Saude  </Text>

               <TouchableOpacity style={{flexDirection: 'row',position: 'absolute', right: 30, bottom: 70,  backgroundColor: 'rgb(22,173,225)', justifyContent: 'center', alignItems: 'center', borderRadius: 30, padding: 10,}}
               onPress={onPressH}
               >
                  <Text style={{fontSize:19, fontWeight: 'bold', color: '#f2f3f4', marginRight: 10  }}>
                     Clique para Continuar  
                  </Text>

                  <Feather
                     name = 'arrow-right'
                     size ={20}
                     color = '#fff'
                  />


               </TouchableOpacity>
            </Animatable.View>

      </View>

   )
}

export default Front;

const styles = StyleSheet.create({
   footer:{

      textAlign: 'center',
      alignItems: 'center',
      padding: 15,
      backgroundColor: 'white',
      flex: 1,
      borderTopEndRadius: 30,
      borderTopStartRadius: 30
   }
})
