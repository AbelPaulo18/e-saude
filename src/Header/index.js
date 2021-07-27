import React from 'react';
import { Text,Image,TouchableOpacity,Platform,ScrollView ,StyleSheet, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';



const Header = ({navigation}) => {
    
  return (
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
  );
}



const styles = StyleSheet.create({

    header:{
       padding: 8,
       width:'100%',
       borderBottomWidth: 1,
       backgroundColor: '#fff',
       paddingTop: Platform.OS == 'ios'? 40 : 0,
       justifyContent: 'space-between',
       alignItems: 'center',
       flexDirection: 'row',
       borderBottomColor: '#ddd',
 
    }
 })
 

export default Header;