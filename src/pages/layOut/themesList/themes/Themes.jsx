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
  const [mode,setMode] = useState({bg:t.darkBlack,color:t.brightWhite})
  const [theme,setTheme] = useState(t.aqua)

  useEffect(()=>{
    const TargetTheme = getComputedStyle(document.documentElement).getPropertyValue('--spicealColor')
  },[])

  const setTargetTheme = (subject,color,bg,color2,bg2)=>{
    if(subject === 'theme'){
      document.documentElement.style.setProperty('--spicealColor',color)
      setTheme(color)
    }else{
      document.documentElement.style.setProperty('--homebg',bg)
      document.documentElement.style.setProperty('--normalColor',color)
      document.documentElement.style.setProperty('--bg',bg2)
      document.documentElement.style.setProperty('--weakColor',color2)
      setMode({bg:bg,color:color})
    }
  }


  return (
    <ThemesListContainer>
      <ThemesListUl>{      
        
        themesColor
        .filter(li=> li.color!==theme && li.color!==mode.color)
        .map(theme =>{
         return theme.subject === 'theme' ? 
            <ThemesLi key={theme.color}>
            <span onClick={()=>setTargetTheme('theme',theme.color,)}>
              <GiButterfly fill={theme.color}/> 
            </span> 
            </ThemesLi> :

            <ModesLi key={theme.color}>
              <span onClick={()=>setTargetTheme('mode',theme.color,theme.bg,theme.color2,theme.bg2,)}>
                {theme.icon}
              </span>
            </ModesLi>
          })}
      </ThemesListUl>

    </ThemesListContainer>
  )
}

export default ThemesList


