/* eslint-disable prettier/prettier */
import React from 'react';
import { Text,Image,TouchableOpacity,View,StyleSheet , KeyboardAvoidingView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


import ConsultScreen from '../Consult';
import SettingsScreen from '../Settings';
import HospitalScreen from '../main/Map';
import HomeScreen from '../Navig';
import Farmacy from '../Farmacia';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const color = "#152642"
const colorOne = 'rgb(22,173,225)'
const Tab = createBottomTabNavigator ();

const Tabs = ()=> {
  return (

    

  <Tab.Navigator 
    tabBarOptions={
     {
      showLabel: false,
      style:{
        position: 'absolute',
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        ...styles.shadow
      }
     }
    }
  >
    <Tab.Screen name = 'Home' component={HomeScreen} options={{
      tabBarIcon: ({focused}) => (
        <View style={{alignItems:'center', justifyContent:'center', top: 5}}>
            <FontAwesome5Icon
              name = 'home'
              style={{
                color:focused? `${colorOne}`: `${color}`,
              }}
              size = {26}
           /> 
          
          <Text style={{color: focused? `${colorOne}`: `${color}`, fontWeight: 'bold'}}> Home</Text>
        </View>
      ),
    }}></Tab.Screen>

    <Tab.Screen name = 'Consulta' component={ConsultScreen}  options={{
      tabBarIcon: ({focused}) => (
        <View style={{alignItems:'center', justifyContent:'center', top: 5}}>
         <FontAwesome5Icon
              name = 'plus'
              style={{
                color:focused? `${colorOne}`: `${color}`,
              }}
              size = {26}
           /> 
          <Text style={{color: focused? `${colorOne}`:`${color}`,}}> Consulta</Text>
        </View>
      ),
    }}></Tab.Screen>


    <Tab.Screen name = 'Farmacy' component={Farmacy}  options={{
      tabBarIcon: ({focused}) => (
        <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'transparent', borderRadius: 32, height: '90%',top: 1}}>
        <FontAwesome5Icon
              name = 'pills'
              style={{
                color:focused? `${colorOne}`: `${color}`,
              }}
              size = {26}
           /> 
          
          <Text style={{color: focused? `${colorOne}`: `${color}`, marginTop: 6}}> Farmácias </Text>
        </View>
      ),
    }}></Tab.Screen>

 <Tab.Screen name = 'Hospital' component={HospitalScreen}  options={{
      tabBarIcon: ({focused}) => (
        <View style={{alignItems:'center', justifyContent:'center', top: 5}}>
           <FontAwesome5Icon
              name = 'ambulance'
              style={{
                color:focused? `${colorOne}`: `${color}`,
              }}
              size = {26}
           /> 
          <Text style={{color: focused? `${colorOne}`: `${color}`,}}> Hospital </Text>
        </View>
      ),
    }}></Tab.Screen>
    

   
  </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  shadow:{
    shadowColor:'#128C7E',
    shadowOffset:{
      width:0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5
  }
})
