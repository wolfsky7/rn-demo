// 
import React,{PureComponent} from 'react'
import {View,ActivityIndicator,StyleSheet,ProgressBar} from 'react-native'
import Video from 'react-native-video'
import PropTypes from 'prop-types'
import ProgressBar from '../components/progress'

class VideoPlayer extends PureComponent{
  constructor(){
    super()
    this.state={
      currentTime:0,
      nextTime:0,
      seekDuration:0,
    }
  }
  renderProgress(){
    return <ProgressBar style={{
      position:'absolute',
      bottom:5,
      height:20,
      left:0,
      right:0
    }} 
      activeColor={'red'}
      bgColor={'gray'}
    />
  }
  render(){
    const {style,...others}=this.props;
    return <View style={style} onTouchStart={this.touchStart} onTouchMove={this.touchMove} >
      <Video style={StyleSheet.absoluteFill} {...others} onProgress={this.onProgress} ref={this.makeRef}></Video>
      {this.renderProgress()}
    </View>
  }

  makeRef=ref=>this.player=ref

  touchStart=e=>{
    console.log(e);
  }


  touchMove=e=>{
    console.log(e);
  }

  onProgress=e=>{
    this.state.currentTime=e.currentTime;
    this.state.seekDuration=e.seekableDuration;
  }

  seek(nextTime){
    if(nextTime>this.state.seekDuration){
      nextTime=this.state.seekDuration;
    }
    if(nextTime<0){
      nextTime=0;
    }

    if(this._ts){
      clearTimeout(this._ts);
    }
    this._ts=setTimeout(()=>{
      this.player.seek(this.state.willTime)
    },500)

    this.setState({
      willTime:nextTime
    })
     
  }


}

VideoPlayer.propTypes={
  enableProgress:true,
}

export default VideoPlayer;