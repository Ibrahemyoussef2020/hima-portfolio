import { useEffect, useState } from 'react'

import { IoMdColorPalette } from "react-icons/io";
import { BsToggleOn } from "react-icons/bs";


import * as t from '../colors'

import themesColor from './themesArray'

import {
ThemesListContainer,
ThemesListWrapper,
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

  const setTargetTheme = (color)=>{
      localStorage.setItem('theme',color)
      setTheme(localStorage.getItem("theme"))   
  }

  const setTargetMode = ()=>{
    const currentMode = mode === 'dark-mode' ? 'light-mode' : 'dark-mode';
    localStorage.setItem('mode',currentMode)
    setMode(localStorage.getItem('mode'))
  }

  return (
    <>
    <ThemesListContainer>
      <ThemesListWrapper>{      
        themesColor
        .map(theme =>{
         return theme.subject === 'theme' ? 
            <ThemesLi key={theme.color}>
            <span onClick={()=>setTargetTheme(theme.color)}>
              <IoMdColorPalette fill={theme.color}/> 
            </span> 
            </ThemesLi> : null
          })}
      </ThemesListWrapper>
    </ThemesListContainer>
    
    <button key={theme.color} className='mode-container' onClick={()=>setTargetMode()}>
      <span className='mode-wheel'></span>
    </button>
    </>
  )
}

export default ThemesList


