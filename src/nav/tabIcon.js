

import homeIcon from '../../assets/img/tab/home-on.png'
import homeOffIcon from '../../assets/img/tab/home-off.png'

import boxIcon from '../../assets/img/tab/box-on.png'
import boxOffIcon from '../../assets/img/tab/box-off.png'

import catIcon from '../../assets/img/tab/category-on.png'
import catOffIcon from '../../assets/img/tab/category-off.png'

export default ({focused,catName})=>{
  switch(catName){
    case 'Tab1':
      return focused?homeIcon:homeOffIcon
    case "Tab2":
      return focused?boxIcon:boxOffIcon
    case "Tab3":
      return focused?catIcon:catOffIcon
  }

  return focused?homeIcon:homeOffIcon
}