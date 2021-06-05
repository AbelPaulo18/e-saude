/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, StyleSheet, View, Image,TouchableOpacity, TextInput, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Apps from '../../App'

const LogScreen = ({navigation}) =>{

   const onPressH = ()=> {
      navigation.navigate('Apps');
   }

   const LogPress = ()=>{
      navigation.navigate('SignIn')
   }
   const [data, setData] = React.useState({
      email:'',
      password: '',
      check_txt_inputChange: false,
      secureTextEntry :true
   })
   const txt_input = (val)=>{
         if( val.length === 0){
               setData({
                  ...data,
                  check_txt_inputChange: false,
                  email: val
               })
         }else{ 
            setData({
               ...data,
               check_txt_inputChange: true,
               email: val
            })
         }
   }

      const password_txt =(val) =>{
            setData({
               ...data,
               password: val,

            })
      }
      const secureTextEntryChange = ()=>{
            setData({
               ...data,
               secureTextEntry: !data.secureTextEntry,
            })

      }

   return(

         <SafeAreaView style={{flex:1, backgroundColor: '#152642'}}>
               
         <KeyboardAvoidingView style={{flex:1, backgroundColor: '#152642'}}>

<View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
<Animatable.Image
animation = 'bounceIn'
duraton = ' 20'
   source ={require('../logo/phone_plus.png')}
   resizeMode = 'contain'
   style={{width: 100, height: 100, tintColor: 'rgb(22,173,225)'}}
/>

 <Text style ={{ fontSize: 30, fontWeight: 'bold', color: 'white', bottom: -35 }}> Sign In  </Text>

 <TouchableOpacity style={{position: 'absolute', top: 20, right: 20,  backgroundColor: 'rgb(22,173,225)', width: 80, justifyContent: 'center',alignItems: 'center', padding: 8  , borderRadius: 4}}>
    <Text style ={{ color: '#fff',}}
    onPress={LogPress}
    >LOGIN</Text>
 </TouchableOpacity>

</View>


<Animatable.View style ={styles.footer}
animation = 'fadeInUp'
duraton = ' 2000'
> 
<Text style={styles.discription}>
   E-mail:
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

   {data.check_txt_inputChange? 

    <Animatable.View animation= 'bounceIn'>
   <Feather
      name = 'check-circle'
      color = '#152642'
      size= {20}
      style={{top:15}}
   />
   </Animatable.View>
    :null}


</View>


<Text style={styles.discription}>
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
  secureTextEntry ={data.secureTextEntry? false: true}
  onChangeText={(val)=> password_txt(val)}
/> 
<TouchableOpacity 
onPress={secureTextEntryChange}
>
{data.secureTextEntry? 
  <Feather
      name = 'eye'
      color = '#152642'
      size= {20}
      style={{top:15}}
   /> 
   :
   <Feather
      name = 'eye-off'
      color = 'grey'
      size= {20}
      style={{top:15}}
   /> 
    }
</TouchableOpacity>
  
  

</View>

<Text style={styles.discription}>
   Confirme a sua Password:
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
  placeholder = 'Confirme sua password'
  secureTextEntry 
  onChangeText={(val)=> password_txt(val)}
/>

  <Feather
      name = 'eye-off'
      color = '#435A64'
      size= {20}
      style={{top:15}}
   />

</View>


<View style={{position: 'absolute', bottom: 60, right: 0, width: '100%', alignItems: 'center' }}>

<TouchableOpacity style= {{   width: 144, height: 40, padding: 8, justifyContent: 'center', alignItems: 'center',borderRadius: 8, backgroundColor: 'rgb(22,173,225)', elevation: 5}}
onPress={onPressH}
>
  <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}> CADASTRAR </Text>
</TouchableOpacity>


</View>


</Animatable.View>

</KeyboardAvoidingView>

         </SafeAreaView>

   );
}

export default LogScreen;

const styles = StyleSheet.create({

      footer:{

         flex: 2,
         height: 100,
         backgroundColor: '#fff',
         borderTopStartRadius: 20,
         borderTopEndRadius: 20,   
         padding: 10
      },
      txtinput:{
         
         left: 20,
         top: 50,
         borderBottomWidth: 1,
          width: 350,
          borderBottomColor: 'grey',
          marginBottom: 10,
          fontWeight: 'bold',
          fontSize: 15,
         marginLeft: 10

      },
      action :{
         flexDirection: 'row',         
         borderBottomWidth: 1,
         marginBottom: 10,
         width: 350,
         borderBottomColor: 'grey',
         marginLeft: 10
      }, 
      txt: {
         flex: 1,
         marginLeft: 10
      },
      discription:{
         fontSize: 19.5,
         fontWeight: 'bold',
         marginLeft: 10,
         marginTop: 10,
         color: 'grey'
      }

})
