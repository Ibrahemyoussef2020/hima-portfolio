import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../loading'
import RoutesList from './routesList'
import ThemesList from './themesList'
import Footer from './footer/Footer'

import './LayOut.css'
import { ButtonList } from './routesList/RoutesList'

const LayOut = () => {
    const [dropState,setDropState] = useState('drop-list-top')
    const [routesTranslate,setRoutesTranslate] = useState(false) 
    const [animeMove,setAnimeMove] = useState('')
    const [loading , setLoading] = useState(true)
    const [scale , setScale] = useState(true)
  
 useEffect(()=>{
  setTimeout(()=> setLoading(false),6000)
 })

 const hundle_drop = ()=>{
    setDropState(dropState => dropState === 'drop-list-top' ? 'drop-list-bottom' : 'drop-list-top')
    routesTranslate ? setRoutesTranslate(false) : setRoutesTranslate(true)
 }

    const Target_Component = loading ? <Loading /> : 
    <main className={`${animeMove ? 'animeMove' : ''}`}>
        <ButtonList onClick={hundle_drop} />
        <div className="container">
            <div className={`layOut ${dropState}`}>
                <div>
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
                </div>
            </div>
            <Outlet/>
            <Footer>
                CREATED BY <span className='spiceal '>IBRAHIM YOUSSEF MOHAMMED</span> © 2023
            </Footer>
        </div>      
    </main>

    return (
        <>
        {Target_Component }
        </>
    )
}

export default LayOut