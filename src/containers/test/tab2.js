import React,{PureComponent} from 'react'
import {View,Image,Text,TextInput} from 'react-native'
import Tab1 from './tab'

class Tab3 extends Tab1{
  getCont(){
    return 'tab3'
  }

  getBg(){
    return 'green'
  }

  toDetail=()=>{
    this.props.navigation.navigate('tab4',{__skip:1})
  }
}

Tab3.navigationOptions={
  title:'tab3'
}

export default Tab3;