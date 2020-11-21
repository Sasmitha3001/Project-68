import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './Screens/fb';
import Instagram from './Screens/ig';

export default class BuzzApp extends Component{
  render(){
    return(
      <View>
      <AppNavigator/>
      </View>
      
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName;
      if(routeName==="Facebook"){
        return( <Image
          source={require("./assets/Facebook Logo.png")}
          style={{width:40,height:40}}
          />)
       
      }
      else if(routeName==="Instagram"){
        return(
          <Image
          source={require("./assets/instagram logo.png")}
          style={{width:40,height:40}}
        />
        )
        
      }
    }
  })
})

const AppNavigator=createAppContainer(TabNavigator)