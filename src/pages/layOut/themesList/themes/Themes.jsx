import { useEffect, useState } from 'react'

import {GiButterfly} from 'react-icons/gi'

import * as t from '../colors'

import themesColor from './themesArray'

import {
ThemesListContainer,
ThemesListUl,
ThemesLi,
ModesLi
} from './Themes'

const ThemesList = () => {
  const [mode,setMode] = useState(localStorage.getItem("mode") || 'dark-mode')
  const [theme,setTheme] = useState(localStorage.getItem("theme") || t.aqua)

  useEffect(()=>{
    document.documentElement.style.setProperty('--spicealColor',localStorage.getItem("theme"))
    document.body.classList = localStorage.getItem('mode');

    const TargetTheme = getComputedStyle(document.documentElement).getPropertyValue('--spicealColor')

  },[localStorage.getItem("theme") , localStorage.getItem('mode')])

  const setTargetTheme = (subject,color)=>{
    if(subject === 'theme'){
      localStorage.setItem('theme',color)
      setTheme(localStorage.getItem("theme"))   
    }else{
      localStorage.setItem('mode',color)
      setMode(localStorage.getItem('mode'))
    }
  }

  return (
    <ThemesListContainer>
      <ThemesListUl>{      
        
        themesColor
        .filter(li=> li.color!= theme && li.color!= mode)
        .map(theme =>{
         return theme.subject === 'theme' ? 
            <ThemesLi key={theme.color}>
            <span onClick={()=>setTargetTheme('theme',theme.color)}>
              <GiButterfly fill={theme.color}/> 
            </span> 
            </ThemesLi> :

            <ModesLi key={theme.color}>
              <span onClick={()=>setTargetTheme('mode',theme.color)}>
                {theme.icon}
              </span>
            </ModesLi>
          })}
      </ThemesListUl>

    </ThemesListContainer>
  )
}

export default ThemesList


