// 
import React,{PureComponent} from 'react'
import {View,Image,Text,TextInput} from 'react-native'

class Tab1 extends PureComponent{
  constructor(){
    super()
  }
  render(){
    return <View style={{justifyContent:'center',alignItems:'center',alignSelf:'stretch',flex:1,backgroundColor:this.getBg()}}>
      <Text onPress={this.onPress}>{this.getCont()}</Text>
      {this.getOthers()}
    </View>
  }

  getOthers(){
    return null;
  }

  onPress=()=>{
    this.toDetail();
  }

  toDetail=()=>{
    this.props.navigation.navigate('tab2')
  }

  getCont(){
    return 'tab1'
  }

  getBg(){
    return 'white'
  }
}

Tab1.navigationOptions={
  title:'tab1'
}

export default Tab1;