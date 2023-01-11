import {CgHomeAlt,CgProfile,CgEye,CgMail,CgLockUnlock} from "react-icons/cg"
import {GiJeweledChalice} from 'react-icons/gi'
import {IoMdFlower} from 'react-icons/io'
import {BsBoxArrowInDownRight,BsBoxArrowInUpLeft} from 'react-icons/bs'

import { ButtonList,RoutsContainer,RoutsList,} from './RoutesList.js'

import './RoutesList.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
 
 const hundle_drop = ()=>{
    setDropState(dropState => dropState === 'drop-list-top' ? 'drop-list-bottom' : 'drop-list-top')
    routesTranslate ? setRoutesTranslate(false) : setRoutesTranslate(true)
 }

 const handle_navigation = (nav)=>{
  setActive(nav)
  setAnimeMove('animeMove')
  setTimeout(()=>{
    navigate(`/${nav!=='home' ? nav:''}`)
  },300)
  setTimeout(()=>{
    setAnimeMove('')
    setDropState('drop-list-top')
  },500)
}

 const routesList = [
    {icon : <CgHomeAlt/>,content : 'home'},
    {icon : <CgProfile/>,content : 'about'},
    {icon : <CgEye/>, content : 'portfolio'},
    {icon : <CgMail/>, content : 'contact'},
    {icon : <CgLockUnlock/>,content : 'p-solving'}
 ]

  return (
    <>
    <RoutsContainer className='RoutsContainer'>
      
      <ButtonList onClick={hundle_drop} />
      
      <RoutsList className={`drop-list ${dropState}`}>
          {routesList.map((route,index) =>
          <li  key={route.content}            
            className={`clicked ${active === route.content ? 'active' : ''}`}
            style={{ top: (index + 1) * 40,}}
            onClick ={()=> handle_navigation(route.content)} 
          >               
            <div>
              <span className='not-arrow icons-list'>
                {route.icon}
              </span>
              <span className='arrow img-arrow spiceal'>
                <BsBoxArrowInUpLeft/>
              </span>
            </div>
            
            <div 
              className={`margin-target ${routesTranslate ? 'margin-hover' : 'margin-blur'}`}
              style={{animationDelay: routesTranslate ? `.${index + 1}s`: 0 }}
            >
              <span className='arrow text-arrow spiceal'>
                <BsBoxArrowInDownRight/>
              </span>
              <span className='not-arrow'>
                {route.content} 
              </span>            
            </div>
          </li>)}
      </RoutsList>
    </RoutsContainer>
            
    </>
  )
}

export default RoutesList