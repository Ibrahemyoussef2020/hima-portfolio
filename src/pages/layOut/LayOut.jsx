import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../loading'
import RoutesList from './routesList'
import ThemesList from './themesList'

import './LayOut.css'

const LayOut = () => {
    const [dropState,setDropState] = useState('drop-list-top')
    const [routesTranslate,setRoutesTranslate] = useState(false) 
    const [animeMove,setAnimeMove] = useState('')
    const [loading , setLoading] = useState(true)
    const [scale , setScale] = useState(true)
  
 useEffect(()=>{
  setTimeout(()=> setLoading(false),5000)
 })

    const Target_Component = loading ? <Loading /> : 
    <main className={`${animeMove ? 'animeMove' : ''}`}>
      <div className={`latOut ${dropState}`}></div>
        <RoutesList
        dropState={dropState}
        setDropState={setDropState}
        routesTranslate={routesTranslate}
        setRoutesTranslate={setRoutesTranslate}
        setAnimeMove={setAnimeMove}
        />
        <ThemesList
            dropState={dropState}
            routesTranslate={routesTranslate}
        />
        <Outlet/>
    </main>

    return Target_Component 
}

export default LayOut