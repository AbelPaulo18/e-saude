/* eslint-disable prettier/prettier */
import React, { Component,useState } from 'react';
import { Text, StyleSheet,TouchableOpacity ,View,Image,Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import Header from '../../Header'
const FamilyScreens = ({navigation})=>{
   
const [data,setData] = useState([
   {
      nome: 'Abel P',
      idade: 19,
      relation: 'Filho',
      avatar: require('../../../Images/Us.jpg')
   },
   {
      nome: 'Abel Luzemba',
      idade: 22,
      relation: 'Irmão',
      avatar: require('../../../Images/Us.jpg')
   },
   {
      nome: 'Kelson P',
      idade: 24,
      relation: 'Irmão',
      avatar: require('../../../Images/Us.jpg')
   },

   

])
      const [info, setinfo] = useState([
         {
            nome: '',
            idade: 10 ,
            relation: '',
         }

      ])

      const [infoActive, setInfoActive ] = useState(false)
   
      return(

      <View style={styles.body}>
       
         <Header navigation={navigation} />

         <ImageBackground style={styles.picture} source={require('../../../Images/B1.jpg')}>
            <View style={{padding: 4}}>

         <View style={styles.advert}>
            <Text style={styles.adTxt}>
               Esta área foi construida para que o usuário possa adicionar ou retirar membros de sua familia, possibilitando a marcação de consulta para os mesmos.
            </Text>
         </View>


            
         <View style={styles.addFamily}>
            
                <Text style={{fontSize: 16,textTransform: 'capitalize',color:'#fff'}}>
                    Adicionar um membro              
                </Text>
           

            <TouchableOpacity style={{
               padding: 6,
               borderTopRightRadius:100,
               borderLeftWidth: 1,
               borderColor: '#eeeeee',
               width:60,
               height: '100%',
               alignItems: 'center',
               justifyContent:'center'
               
               }}>
                <FontAwesome
                   name= 'user-plus'
                   color= 'white'
                   size={20}
                   style={{elevation:5}}
                />
            </TouchableOpacity>
           
         </View>

      <ScrollView style={{padding: 2}}>
               
      {
               data.map((item,index)=>(
                  <View style={styles.familyMembers}>
                  <View style={{
                  alignItems:'center',
                  justifyContent:'center',
                  padding: 12,
                  broderRadius: 100,
                  
                  }}>
                     <FontAwesome
                        name= 'user-alt'
                        size={45}
                        color={'grey'}
                     />
                  </View>

         <View style={styles.members}> 
               <View>
                     <Text style={styles.txt}> Nome: <Text style={styles.name}> {item.nome} </Text>  </Text>
                        <Text style={styles.txt}> Idade: <Text style={styles.name}> {item.idade} </Text>  </Text>
                     <Text style={styles.txt}> Relação: <Text style={styles.name}> {item.relation} </Text>  </Text>
               </View>
                  <View>
                         
         </View>
                  
                  <View style={{
                  
                     alignItems:'center',
                     justifyContent:'space-between',
                     flexDirection:'row',
                     width:'25%',
                                          
                  }}>
                     <TouchableOpacity style={styles.button}
                     onPress={()=> setInfoActive(!infoActive)}
                     >
                        <Icon
                        name= 'hospital'
                        size = {30}
                        color = '#152642'
                        style={{
                           marginRigth: 10
                        }}
                     />
                     </TouchableOpacity>
                     
                     <TouchableOpacity style={styles.button}
                     onPress={() => {}}
                     >
                        <FontAwesome
                        name= 'user-minus'
                        size = {23}
                        color = 'grey'
                        style={{
                           marginRigth: 8,
                        }}
                     />
                     </TouchableOpacity>
                     
                  </View>
               </View>
            
                  </View>     
               ))
            }
         
      </ScrollView>

      {
              infoActive ? (
                 
        <Animatable.View style={styles.footer} 
        animation = 'fadeIn'
        duraton = '1500'
        >
               <Text> consulta </Text>

         </Animatable.View>

              )
              :
              null
           }
           
           </View>
           </ImageBackground>
      </View>
   )
}

export default FamilyScreens;

const styles = StyleSheet.create({
   body:{
      flex:1,
      alignContent: 'center',
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

   },
   advert:{

      padding: 8,
      backgroundColor: '#ffffff80',
      marginTop: 1,
      width: '100%',
      marginBottom: 16,
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      borderRadius: 4
   },
   members:{

      backgroundColor: '#ffffff50',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 8,
      flexDirection:'row',
      width: '83%',
      height: '100%',
      
   },
   familyMembers:{
      
      flexDirection: 'row',
      backgroundColor:'#ffffff90',
      marginBottom:8,
      alignItems:'center',
      height: 80,
      borderRadius:4,
      

   },
   adTxt:{
   
      fontSize: 16,
      fontWeight: 'bold',
   
   },
   addFamily:{
      
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
      height: 40,
      marginBottom: 12,
      width: '75%',
      alignSelf: 'center',
      backgroundColor:'#aaaaa999',
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      paddingLeft: 20,
      elevation: 1
   },
   button:{
      borderRadius: 100
   },
   name:{
      textTransform:'capitalize',
      color: 'grey',
      
   },
   txt:{
      fontWeight:'bold',
      fontSize:16,
      color:'#152642',
   },
   footer:{

      height: 410,
      backgroundColor:'#aaa',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 10,
 
   },
   picture:{
      flex: 1
   }
})
