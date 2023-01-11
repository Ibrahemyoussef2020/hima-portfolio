import { useState } from 'react'
import Loading from '../loading'

import{
Home_,
Home_Img_,
Home_Content_,
Animated_Title ,
Animation_Title_Container
} from './Home'

const Home = () => {
  return <Home_ >
      <Home_Img_>
          <div className='home-img-container circle'>
            <img className='fill circle' src='images/ibrahim.jpg' alt='me'/>
          </div>
      </Home_Img_>

      <Home_Content_  className='home-content'>
        <h4>well come !</h4>
        <h2>I AM</h2>
        <Animation_Title_Container>
          <Animated_Title>
            <span>IBRAHIM_YOUSSEF_MO</span>
            <span>A FRONTEND_DEVOLEPER</span>
          </Animated_Title>
        </Animation_Title_Container> 
        <div>
            <p>
              I'm starving to build amazing and beautiful web \ app - sites - games \ with a very - reusable , readble , clean - code. i adore a creative ideas
            </p>
        </div>
        </Home_Content_>
    </Home_> 
}

export default Home