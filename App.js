/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './src/stack/Index';
import Blue from './src/stack/SecondaryScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LocationMap from './src/main/Hlocation';
import DrawerContainer from './src/Drawer/DrawerContent';
import FamilyScreens from './src/Drawer/DrawerScreens/FamilyMembers';
import Historial from './src/Drawer/DrawerScreens/Historic';
import Bookmark from './src/Drawer/DrawerScreens/Bookmark';
import Settings from './src/Drawer/DrawerScreens/Settings';
import HospitalScreen from './src/HospitalScreen';

const Drawer = createDrawerNavigator();

const Apps = ()=> {
  return(

    <NavigationContainer  independent={true} >
      <Drawer.Navigator initialRouteName = 'Tabs'
       drawerContent = { props => <DrawerContainer {...props} />}
       >  

        <Drawer.Screen
               name='Tabs'
               component={Tabs}
               options ={
            {
               header : ()=> null
            }
         }
            />

         <Drawer.Screen
               name='HospitalScreen'
               component={HospitalScreen}
                options ={
            {
               header : ()=> null
            }
         }
            />

        <Drawer.Screen
               name='Blue'
               component={Blue}
            
            />
        <Drawer.Screen
               name='Maps'
               component={LocationMap}
               options ={
            {
               headerTitleAlign: 'center',
               headerTitle: 'Mapa'
            }
         }
            />
       
        <Drawer.Screen
               name='Family'
               component={FamilyScreens}
               options ={
            {
               header: ()=> null
            }
         }
            />
      
        <Drawer.Screen
               name='Historial'
               component={Historial}
               options ={
            {
               header: ()=> null
            }
         }
            />
         
        <Drawer.Screen
               name='Bookmark'
               component={Bookmark}
               options ={
            {
               header: ()=> null
            }
         }
            />
         
        <Drawer.Screen
               name='Settings'
               component={Settings}
               options ={
            {
               header: ()=> null
            }
         }
            />
        
         

      </Drawer.Navigator>
      
      
    </NavigationContainer>

  );
}

export default Apps;