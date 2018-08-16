import React,{PureComponent} from 'react'
import {View,Image,Text,ScrollView,FlatList,Dimensions} from 'react-native'

import _map from 'lodash/map'
import Swiper from 'react-native-swiper'

const {width,height}= Dimensions.get('window');

class Home extends PureComponent{
  constructor(){
    super()
    this.state={
      data:_map(new Array(200),(item,index)=>{
        return {
          text:`test-${index}`
        }
      })
    }
  }
  render(){
    return this.renderList();
  }

  renderList(){
    return <FlatList style={{flex:1}}
      data={this.state.data}
      renderItem={this.renderItem}
      getItemLayout={this.getItemLayout}
      keyExtractor={(item,index)=>index}
      numColumns={2}
      removeClippedSubviews={false}
      ListHeaderComponent={this.renderHeader()}
    >
    </FlatList>
  }

  renderHeader(){
    return <View style={{width:width,height:height-70}}>
      <Swiper>
        <View style={{flex:1,backgroundColor:'red'}}></View>
        <View style={{flex:1,backgroundColor:'yellow'}}></View>
        <View style={{flex:1,backgroundColor:'green'}}></View>
      </Swiper>
    </View>
  }

  getItemLayout=(item,index)=>{
    const isOdd=index%2==0;
    console.log(index)
    return {
      length:isOdd?100:201,
      offset:(index/2)*(isOdd?100:201),
      index,
    }
  }

  renderItem({item,index}){
    const isOdd=index%2==0;
    return <View key={index} style={{borderBottomColor:'black',marginTop:isOdd?(index/2)*-50:0,borderBottomWidth:1,backgroundColor:isOdd?"red":"green",width:width/2,height:isOdd?100:150,justifyContent:'center',alignItems:'center'}}>
      <Text>{item.text}</Text>
    </View>
  }
}

Home.navigationOptions={
  header:null,
}

export default Home;