/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react'
import { Text, StyleSheet, View,Platform,Image } from 'react-native'
import Header from '../../Header'
const Historial = ({navigation})=> {

   const [historico, sethistorico] = useState([
      {
         nome: 'clínica sagrada esperança',
         start: '02/02/2021',
         finish: '10/02/2021',
         doutor: 'Odeth da costa',
         consulta: 'ortopedia'
      },
      {
         nome: 'hospital geral de luanda',
         start: '22/07/2020',
         finish: '10/10/2020',
         doutor: 'Célio sebastião salvador',
         consulta: 'check up'
      },
      {
         nome: 'clínica multiperfil',
         start: '28/12/2021',
         finish: '01/01/2022',
         doutor: 'King boris',
         consulta: 'otorrino'
      },
   ])

   return(
      <View style={styles.body}>
         <Header navigation={navigation} />     
                  <Text style={{textAlign:'center',textTransform: 'uppercase',fontSize: 16,fontWeight: 'bold',color: '#152642'}}>HIstórico</Text>
   
{
   historico.map((item,index) =>(
    
      <View style={styles.historyBox}>
            <Text style={styles.name}> {item.nome} </Text>
            <Text style={styles.main}> Data: <Text style={styles.data}> {item.start} </Text> aos <Text style={styles.data}> {item.finish} </Text>  </Text>
            <Text style={styles.main}> Doutor(a) : <Text style={styles.md}> {item.doutor} </Text> </Text>
            <Text style={styles.main}> consulta: <Text style={styles.data}> {item.consulta} </Text> </Text>
         </View>
      
   ))
}
   
      </View>
   )
}
export default Historial;
const styles = StyleSheet.create({
   body:{
      flex: 1,     
      alignItems: 'center'
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
      marginBottom: 32

   },
   historyBox:{
      width: '90%',
      backgroundColor:'#fff',
      marginTop: 16,
      borderRadius: 4,
      padding: 16,
      elevation: 4
   },
   main:{
      fontSize: 14,
      fontWeight:'bold',
      color: 'grey',
   },
   md:{
      textTransform: 'capitalize',
      color: '#152642',
      fontStyle: 'italic',
      fontWeight: 'bold'
   },
   data:{
      color:'#152642',
      fontStyle: 'italic',
      textTransform: 'capitalize'
   },
   name:{
      fontSize: 18,
      color: '#152642',
      fontWeight: 'bold',
      fontStyle: 'italic',
      marginBottom: 4,
      textTransform: 'capitalize'
   }

})
