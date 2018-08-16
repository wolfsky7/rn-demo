import React from 'react'
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation'
import {Image,View,Text,Button} from 'react-native'
import Pages from './pages.js'
import getIcon from './tabIcon'

import homeIcon from '../../assets/img/tab/home-on.png'
import homeOffIcon from '../../assets/img/tab/home-off.png'

const getNavs=first=>{
  return {
    screen:createStackNavigator(Pages,{
      initialRouteName:first
    })
  }
}

export default createBottomTabNavigator({
  Tab1:getNavs('home'),
  Tab2:getNavs('tab2'),
  Tab3:getNavs('tab3'),
},
{
  initialRouteName: 'Tab1',
  navigationOptions:({ navigation })=>{
    const { routeName } = navigation.state;
    return  {
      tabBarLabel:()=>null,
      tabBarIcon:({tintColor,focused,...others})=><Image style={{width:25,height:25}} source={getIcon({focused,catName:routeName,...others})} />,
      tabBarOnPress:({navigation})=>{
        navigation.navigate(navigation.state.routeName);
      },
      tabBarOptions:{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }
    }
  }
}
)


