// 
import React,{PureComponent} from 'react'
import {View,Image,Text,Button} from 'react-native'
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
import Tab1 from './tab'

class Tab2 extends Tab1{
  
  toDetail=()=>{
    this.props.navigation.navigate('tab3')
  }
  getCont(){
    return 'tab2'
  }

  getBg(){
    return 'red'
  }

  quick=()=>{
    this.player.seek(this.currentTime+5)
  }

  renderVideo(){
    return <VideoPlayer
    style={{width:300,height:200}}
    source={{uri:"http://pic.qiantucdn.com/58pic/video/27/33/04/27330416_75.mp4"}}
    navigator={this.props.navigator}
    // onError={this.onError}
    // // onEnd={this.play}
    // onProgress={this.onProgress}
    // ref={ref=>this.player=ref}
    // repeat={true}
    // volume={0.5}

  />
    return <Video
    style={{width:300,height:200}}
    source={{uri:"http://pic.qiantucdn.com/58pic/video/27/33/04/27330416_75.mp4"}}
    onError={this.onError}
    // onEnd={this.play}
    onProgress={this.onProgress}
    ref={ref=>this.player=ref}
    repeat={true}
    volume={0.5}

  />
   
  }

  getOthers(){
    return <View>
      <Button title="快进" onPress={this.quick} />
      {this.renderVideo()}
      </View>
  }

  onProgress=(e)=>{
    this.currentTime=e.currentTime
  }

  onError=e=>{
    console.error(e)
  }

  play(){
    this.player.play();
  }
}

Tab2.navigationOptions={
  title:'tab2'
}

export default Tab2;