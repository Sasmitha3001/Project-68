import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { Component } from 'react';
import React from 'react';


export default class Instagram extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                 <TouchableOpacity style={styles.header}>
              <Text style={styles.text}>Instagram</Text>
                </TouchableOpacity> 
            <Image
              source={require('../assets/instagram logo.png')}
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
        alignSelf:'center',
        width:250,
        height:100
    },
    container:{
        flex:1
    }

})