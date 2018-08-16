import React,{PureComponent} from 'react'
import {View,Image,Text,TextInput} from 'react-native'
import Tab1 from './tab'

class Tab3 extends Tab1{
  getCont(){
    return 'tab4'
  }

  getBg(){
    return 'yellow'
  }

  toDetail=()=>{
    this.props.navigation.navigate('tab5')
  }
}

Tab3.navigationOptions={
  title:'tab4'
}

export default Tab3;