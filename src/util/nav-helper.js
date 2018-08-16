import {NavigationActions} from 'react-navigation'
let getNavigationActionCreators=require('react-navigation/src/routers/getNavigationActionCreators')

// 拦截goback

let deff=getNavigationActionCreators.default;
getNavigationActionCreators.default=route=>{
  let {goBack,...others}=deff(route);

  let newGoBack=(key)=>{
    return back()||goBack(key)
  }

  return {
    goBack:newGoBack,...others
  }
}

let navRef=null;

const init=ref=>{
  navRef=ref;

  ref._navigation.addListener('action',(a,e)=>{
    console.log(a)
    console.log(e)
  })
}

const getKeyfromRoute=(routeName,routes)=>{
  for(let i=routes.length-2;i>=0;i--){
    if(routes[i]){
      if(routes[i].routeName==routeName){
        return {key:routes[i+1].key,params:routes[i].params};
      }
    }
    else{
      break;
    }
  }
  return null;
}


const back=(routeName)=>{
  if(!navRef){
    return null;
  }
  // 当前的state
  const stackState=navRef._navigation.state.routes[navRef._navigation.state.index];
  
  let backParams=null;

  if(!backParams){
    // last
    let nextRoute=stackState.routes[stackState.index-1];
    if(nextRoute&&nextRoute.params){
      /**
       * __skip 回退时 跳过几步
       * __do 回退后要执行的操作
       * __routeName 回退到指定route
       */
      const {__skip,__routeName}=nextRoute.params;
      if(__skip){
        nextRoute=stackState.routes[stackState.index-1-__skip];
        if(nextRoute){
          backParams={key:stackState.routes[stackState.index-__skip].key,params:nextRoute.params};
        }
      }
      if(__routeName){
        backParams=getKeyfromRoute(__routeName,stackState.routes)
      }
    }
  }

  if(backParams){
    if(backParams.params&&backParams.params.__do)
      setImmediate(backParams.params.__do)
    
    return (NavigationActions.back({
      key:backParams.key,
      __handled:true
    }))
  }
  
  return null;
}


export {
  init,back
}