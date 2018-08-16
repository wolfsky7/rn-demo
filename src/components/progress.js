import React,{PureComponent} from 'react'

import {ProgressBarAndroid,ProgressViewIOS,Platform} from 'react-native'

const isIos= Platform.OS === 'ios'

class ProgressBar extends PureComponent{
  render(){
    if(isIos)
      return this.renderIos()
    return this.renderAnd()
  }
  renderAnd(){
    const {progress,style,activeColor,bgColor}=this.props;
    return <ProgressBarAndroid
      style={[style,{backgroundColor:bgColor}]}
      styleAttr="Horizontal" 
      animating={true}
      color={activeColor}
      indeterminate={false}
      progress={progress}
    />
  }
  renderIos(){
    const {progress,style,activeColor,bgColor}=this.props;
    return <ProgressViewIOS
      style={style}
      progress={progress}
      progressTintColor={activeColor}
      progressViewStyle={'bar'}
      trackTintColor={bgColor}
    />
  }
}