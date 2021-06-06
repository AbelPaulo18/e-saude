/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './src/stack/Index';
import Blue from './src/stack/SecondaryScreen';
import Maps from './src/stack/Hmaps';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import {Button} from 'react-native';
import LocationMap from './src/main/Hlocation';
import DrawerContainer from './src/Drawer/DrawerContent';

const Drawer = createDrawerNavigator();
const SecStack = createStackNavigator();

const Apps = (navigation)=> {
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
         

      </Drawer.Navigator>
      
      
    </NavigationContainer>

  );
}

export default Apps;