import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { Component } from 'react';
import React from 'react';


export default class Facebook extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                
                 <TouchableOpacity style={styles.header}>
              <Text style={styles.text}>Facebook</Text>
                 </TouchableOpacity>
            <Image
            source={require('../assets/Facebook Logo.png')}
            style={{width:150,height:150,alignSelf:'center'}}
          />     
            </View>
         
        )
    }
}

const styles=StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'white'
    },
    header:{
        backgroundColor:'blue',
        width:250,
        height:100,
        alignSelf:'center'
    },
    container:{
        flex:1
    }

})