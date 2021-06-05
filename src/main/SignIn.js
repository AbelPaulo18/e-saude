/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image,TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import *as Animatable from 'react-native-animatable'

const SignIn = ({navigation}) =>{

   const onPressH = ()=> {
      navigation.navigate('Apps');
   }

   const Retornar = ()=>{
      navigation.goBack()
   }

   const[data, setData] = React.useState ({

      email:'',
      password: '',
      txtInputChange: false,
      secureTextEntry: true

   })

   const txt_input = (val)=>{
      if(val.length === 0){
          setData({
         ...data,
         email: val,
         txtInputChange:false
      })
      }else{
         setData({
            ...data,
            email: val,
            txtInputChange:true
         })
      }
     
   }

   const txt_password = (val) =>{
      setData({
         ...data,
         password: val
      })
   }


const secureTextEntryChange = ()=>{
      setData({
         ...data,
         secureTextEntry: !data.secureTextEntry,
      })

}
   return(

         <KeyboardAvoidingView style={{flex:1, backgroundColor: '#152642'}}>

            <View style={{flex:2, alignItems:'center', justifyContent: 'center'}}>
            <Image
               source ={require('../logo/phone_plus.png')}
               resizeMode = 'contain'
               style={{width: 100, height: 100, tintColor: 'rgb(22,173,225)'}}
            />

             <Text style ={{ fontSize: 30, fontWeight: 'bold', color: 'white', bottom: -35, }}> Login </Text>

             <TouchableOpacity style={{position: 'absolute', top: 20, right: 20 ,  backgroundColor: 'rgb(22,173,225)',borderRadius: 4, paddingLeft: 8, paddingRight: 8 }} >
                <Text style ={{  color: '#fff',padding: 5, }}
               onPress={Retornar}
                >SIGN IN</Text>
             </TouchableOpacity>

            </View>
            
         
            <View style ={styles.footer}> 

            <Text style ={styles.discription}>
               E-mail
            </Text>
            <View style={styles.action}>
            
               <FontAwesome
                  name = 'user'
                  color = '#152642'
                  size = {20}
                  style={{top:15}}
               />
           <TextInput
              placeholder = 'Digite seu e-mail'
              style={styles.txt}  
              onChangeText={(val)=> txt_input(val)}
           />
           {data.txtInputChange ? 
           <Animatable.View animation= 'bounceIn'>
            <Feather
                  name = 'check-circle'
                  color = '#152642'
                  size= {20}
                  style={{top:15}}
               />
           </Animatable.View>
              
               : null}

            </View>

            
            <Text style ={styles.discription}>
               Password:
            </Text>

            <View style={styles.action}>
          
               <FontAwesome
                  name = 'lock'
                  color = '#152642'
                  size = {20}
                  style={{top:15}}
               />
           
               
          <TextInput
              style={styles.txt}
              placeholder = 'Digite sua password'
              secureTextEntry={ data.secureTextEntry ?  true : false  }
              onChangeText={(val) => txt_password(val)}
           />  
           <TouchableOpacity onpress={secureTextEntryChange}>

           {data.secureTextEntry ? 
               <Feather
                  name = 'eye-off'
                  color = 'grey'
                  size= {20}
                  style={{top:15}}
               />
               : <Feather
                  name = 'eye'
                  color = '#152642'
                  size= {20}
                  style={{top:15}}
               />
               
               }
            </TouchableOpacity>

            </View>



           
         <View style={{position: 'absolute', bottom: 40, right: 0,  height: '10%', alignItems: 'center', width : '100%' }}>

<TouchableOpacity style= {{  justifyContent: 'center', alignItems: 'center', height: 40,borderRadius: 8, backgroundColor: 'rgb(22,173,225)', elevation: 5, width:144, }}
  onPress={onPressH}
  >
     <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}> LOGAR </Text>
  </TouchableOpacity>


</View>

            </View>

         </KeyboardAvoidingView>
   );
}

export default SignIn;

const styles = StyleSheet.create({

      footer:{

         flex: 2,
         height: '80%',
         backgroundColor: '#fff',
         borderTopStartRadius: 20,
         borderTopEndRadius: 20,  
         padding: 10 
         
      },
      txt:{  
         flex: 1,
         marginLeft: 10
      },
      action :{
         flexDirection: 'row',
         borderBottomWidth: 1,
         marginBottom: 10,
         width: 350,
         borderBottomColor: 'grey',
         marginLeft: 10,
      }, 
       discription:{
         fontSize: 16,
         fontWeight: 'bold',
         marginLeft: 5,
         marginTop: 5,
         color: 'grey'
      }

})