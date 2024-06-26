import { useState } from 'react'
import Loading from '../loading'
import {Button} from '../../components'
import go_to_Cv ,{go_to_Link} from '../../cv/Cv_Link'

import{
HOME,
HOME_IMG,
HOME_CONTENT,
ANIMATED_TITLE ,
CONTENT_FOOTER,
ANIMATION_TITLE_CONTAINER
} from './Home'

const Home = () => {
  return (
    <HOME>
      <div className='home-container'>
      <HOME_IMG>
          <div className='home-img-container'>
            <img className='fill' src='images/ibrahem.webp' alt='me'/>
          </div>
      </HOME_IMG>

      <HOME_CONTENT>
        <h3>well come !</h3>
        <h2>I'M</h2>
        <ANIMATION_TITLE_CONTAINER>
          <ANIMATED_TITLE>
            <span>IBRAHIM YOUSSEF MO</span>
            <span>A FRONTEND DEVOLEPER</span>
          </ANIMATED_TITLE>
        </ANIMATION_TITLE_CONTAINER> 
        <div>
            <p>
              I'm starving to build amazing and beautiful web \ app - sites - games \ with a very - reusable , readble , clean - code. i adore a creative ideas
            </p>
        </div>
        <CONTENT_FOOTER>
          <Button 
            onClick={go_to_Cv}
            background='var(--spicealColor)' 
            backgroundLayOut='var(--bg)'>
            <span>My cv</span>
          </Button>
          <Button
            onClick={()=>go_to_Link('https://www.linkedin.com/in/ibrahim-youssef-2a65b1261')} 
            background='transparent' 
            backgroundLayOut='var(--spicealColor)'>
            <span>My Linked In</span>
          </Button>
          </CONTENT_FOOTER>
        </HOME_CONTENT>
    </div>    
    </HOME> 
  )
}

export default Home