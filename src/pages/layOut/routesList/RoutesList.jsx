import {CgHomeAlt,CgProfile,CgEye,CgMail,CgLockUnlock} from "react-icons/cg"
import {IoMdFlower} from 'react-icons/io'
import {BsBoxArrowInDownRight,BsBoxArrowInUpLeft} from 'react-icons/bs'

import { ButtonList,RoutsContainer,RoutsList,} from './RoutesList.js'

import './RoutesList.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LARGE_BULL from "../../../components/largeBull/LargBull.js"
import { Medium_BULL } from "../../../components/index.js"

const RoutesList = (props) => {
  const {
    dropState,
    setDropState,
    routesTranslate,
    setRoutesTranslate,
    setAnimeMove
  } = props

  const [active,setActive] = useState('home')

  const navigate = useNavigate()

 const handle_navigation = (nav)=>{
  setDropState('drop-list-top')
  setActive(nav)
  setAnimeMove('animeMove')
  setRoutesTranslate(false)

  setTimeout(()=>{
    navigate(`/${nav!=='home' ? nav:''}`)
  },100)
  setTimeout(()=>{
    setAnimeMove('')
  },2000)
}

 const routesList = [
    {page :'home' ,content : 'home'},
    {page :'about' ,content : 'about'},
    {page :'portfolio' ,  content : 'projects'},
    {page :'contact', content : 'contact'},
    {page :'p-solving' ,content : 'algorithm'}
 ]

  return (
    <>
    <RoutsContainer className='RoutsContainer'>  
      <RoutsList className={`drop-list ${dropState}`}>
          {routesList.map((route,index) =>
          <article key={route.content}            
            className={`clicked ${active === route.content ? 'active' : ''}`}
            style={{ top: (index + 1) * 40,}}
            onClick ={()=> handle_navigation(route.page)} 
          >  
          <Medium_BULL>
            {route.content}
          </Medium_BULL>             
            
          </article>)}
      </RoutsList>
    </RoutsContainer>
            
    </>
  )
}

export default RoutesList