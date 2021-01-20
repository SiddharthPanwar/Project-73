import * as React from'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Write from './screens/WriteStoryScreen'
import Read from './screens/ReadStoryScreen'

export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Write : {Write : Write},
  Read : {Read : Read}
},
{
  defaultNavigationOptions : ({navigation})=>({
    tabBarIcon : ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if (routeName==="Write") {
        return(
          <Image
          source={require("./assets/write.png")} 
          style={{width : 40, height : 40,}} />
        )
      }
      else if (routeName==="Read") {
        return(
          <Image
          source={require("./assets/read.png")} 
          style={{width : 40, height : 40,}} />
        )
      }
    }
  })
}
)

const AppContainer = createAppContainer(TabNavigator)