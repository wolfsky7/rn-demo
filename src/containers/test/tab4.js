import React,{PureComponent} from 'react'
import {View,Image,Text,TextInput} from 'react-native'
import Tab1 from './tab'

class Tab3 extends Tab1{
  getCont(){
    return 'tab5'
  }

  getBg(){
    return 'purple'
  }

  toDetail=()=>{
    this.props.navigation.navigate('tab1')
  }
}

Tab3.navigationOptions={
  title:'tab5'
}

export default Tab3;