/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { Text, Image,StyleSheet, View,TouchableOpacity, TextInput ,Button,Platform, ScrollView} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';


const TriagemScreen = ({navigation}) => {

      const [Emergency, setEmerg] = useState([
   {title:'Há comprometimento da via aérea', visible: false}, 
   {title:'Respiração ineficaz', visible: false}, 
   {title:'choque', visible: false}, 
   {title:'Criança que não responde', visible: false}, 
  
   ]);

      const [MuitaUrgencia, setEMurge] = useState([
         {title:'Dor severa', visible: false },
         {title:'Grande emorragia incontrolável', visible: false },
         {title:'alterção do nível de consciência', visible: false },
         {title: 'Criança quente', visible: false },
   ]);

      const [Ugerncy, setUgerncy] = useState([
         {title: 'Dor moderada', visible: false },
         {title:  'Pequena emorragia incontrolável', visible: false },
         {title:  'história inapropiada', visible: false },
         {title: 'vômitos persistentes', visible: false },
         {title: 'quente', visible: false },
   ]);

      const [LessUgerncy, setLess] = useState([
         {title: 'Dor', visible: false },
         {title: 'Febívula', visible: false },
         {title: 'Vômitos', visible: false },
   ]);

      const [NotBad, setNotBad] = useState([
         {title: 'Problema recente', visible: false}
   ]);

     const [check, setCheck] = useState(false);

     const Back = ()=>{
      navigation.navigate('Tabs')
     }

      return (

         <View style ={styles.body}>

<View style={styles.header}>

<TouchableOpacity style={{
   alignItems: 'center',
   justifyContent:'center'
}}
onPress ={()=>{navigation.openDrawer()}}
 >
   <Feather
      name = 'menu'
      size={32}
   />
</TouchableOpacity>


<View style={{
   alignItems: 'center',
   justifyContent:'flex-end'
}}>
   <Image
      source={require('../logo/phone_plus.png')}
      style={{
         height: 32,
         width: 32
      }}
   />
     <Text>é-Saúde</Text>

</View>

      
   <FontAwesome5Icon
      name = 'fire'
      size={32}
   />

</View>

               <View style={{height: 100,
               width: '100%',
               backgroundColor: '#152642',
               justifyContent: 'flex-start',
               alignItems: 'center', 
               padding: 4,
               borderRadius: 6,
               elevation: 4,
               marginBottom: 16 }}>
                  <Text style={{color: 'white'}}>
                     Advert...........................................
                  </Text>
               </View>

      <ScrollView style={{padding: 5}} >
          <View style={styles.scrollBody}>

          <View>
                     
                     {
                        Emergency.map((item, index) => (
                       
                           <TouchableOpacity onPress={()=> {
                              setEmerg(
                                 Emergency.map( (itemIn, indexIn) => {
                                             if(index == indexIn){
                                                return {
                                                   ...itemIn,
                                                   visible:!item.visible
                                                }
                                             }else{
                                                return itemIn
                                             }
                                 })
                              )
                           }}>
                            <View style={styles.questions}  >

                              <Text style={styles.questTxt}> {item.title} ? </Text>

                              {
                                 item.visible ? (
                                     <Feather
                                
                                         name = 'check'
                                          size= {20}
                                          color = {'red'}
                                       style={{
                                          borderLeftWidth: 1,
                                          paddingLeft: 8
                                       }}
                                     />

                                 )
                                 :
                                 null
                              }

                            </View>   
                           </TouchableOpacity>
                         
                        ))
                      } 
                 
           </View>

          
           <View>
                                    
                  {
                     MuitaUrgencia.map((item, index) => (
                    
                        <TouchableOpacity onPress={()=> {
                           setEMurge(
                              MuitaUrgencia.map( (itemIn, indexIn) => {
                                          if(index == indexIn){
                                             return {
                                                ...itemIn,
                                                visible:!item.visible
                                             }
                                          }else{
                                             return itemIn
                                          }
                              })
                           )
                        }}>
                         <View style={styles.questions}>

                           <Text style={styles.questTxt}> {item.title} ? </Text>

                           {
                              item.visible ? (
                                  <Feather
                             
                                      name = 'check'
                                       size= {20}
                                       color = {'orange'}
                                   
                                  />

                              )
                              :
                              null
                           }

                         </View>   
                        </TouchableOpacity>
                      
                     ))
                   } 
              
        </View>

          <View>
                     
                     
                     {
                        Ugerncy.map((item, index) => (
                       
                           <TouchableOpacity onPress={()=> {
                              setUgerncy(
                                 Ugerncy.map( (itemIn, indexIn) => {
                                             if(index == indexIn){
                                                return {
                                                   ...itemIn,
                                                   visible:!item.visible
                                                }
                                             }else{
                                                return itemIn
                                             }
                                 })
                              )
                           }}>
                            <View style={styles.questions}  >

                              <Text style={styles.questTxt}> {item.title} ? </Text>

                              {
                                 item.visible ? (
                                     <Feather
                                
                                         name = 'check'
                                          size= {20}
                                          color = {'#fffe22'}
                                      
                                     />

                                 )
                                 :
                                 null
                              }

                            </View>   
                           </TouchableOpacity>
                         
                        ))
                      } 
                 
                 
           </View>
               
          <View>
                     
                     {
                        LessUgerncy.map((item, index) => (
                       
                           <TouchableOpacity onPress={()=> {
                              setLess(
                                 LessUgerncy.map( (itemIn, indexIn) => {
                                             if(index == indexIn){
                                                return {
                                                   ...itemIn,
                                                   visible:!item.visible
                                                }
                                             }else{
                                                return itemIn
                                             }
                                 })
                              )
                           }}>
                            <View style={styles.questions}  >

                              <Text style={styles.questTxt}> {item.title} ? </Text>

                              {
                                 item.visible ? (
                                     <Feather
                                
                                         name = 'check'
                                          size= {20}
                                          color = {'green'}
                                       
                                     />

                                 )
                                 :
                                 null
                              }

                            </View>   
                           </TouchableOpacity>
                         
                        ))
                      } 
                 
                 
           </View>
               
          <View>
                     
                     {
                        NotBad.map((item, index) => (
                           <TouchableOpacity onPress={()=> {
                              setNotBad(
                                 NotBad.map((itemB, indexB) =>{
                                    if( indexB == index ){
                                       return {
                                          ...itemB,
                                          visible: !item.visible
                                       }
                                    }else{
                                       return{
                                          itemB
                                       }
                                    }
                                 })
                              )
                           }}>
                              <View style={styles.questions}  >
                                    <Text style={styles.questTxt}> {item.title} ? </Text>

                              {
                                 item.visible? (
                                    <Feather
                                       name = 'check'
                                       size = { 20 }
                                       color = {'blue'}
                                    />
                                 ): null
                              }

                              </View>
                           </TouchableOpacity>
                               
                        ))
                      } 
                 
           </View>
               

          </View>
      </ScrollView>

            

         </View>
      );
}
export default TriagemScreen;

const styles = StyleSheet.create({

   body:{

      flex: 1,
      backgroundColor:'#fff',
      padding: 0,
      
   },
 
   header:{

      padding: 8,
      width:'100%',
      borderBottomWidth: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS == 'ios'? 16 : 0,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomColor: '#ddd',
      marginBottom: 16

   },

   head:{

      height: '20%',
      width:'100%',
      backgroundColor: '#152642',
      marginBottom: 32,
      marginTop: 16,
      borderRadius: 8,
      elevation: 5

   },

   scrollBody:{
       padding: 8
   },

   questions:{
      width: '100%',
      backgroundColor: '#ffffff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 40 ,
      borderRadius: 4,
      elevation: 1,
      marginBottom: 10,
      padding: 10
   },
  
   questTxt:{
      textTransform: 'capitalize',
      fontSize: 16,
      fontWeight: 'normal'
   },

   condition:{
      
      textTransform: 'capitalize',
      fontSize: 19,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 16,
      marginTop: 16
   }

})
