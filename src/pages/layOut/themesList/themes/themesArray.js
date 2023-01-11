import {GiButterfly} from 'react-icons/gi'

import {BsFillSunFill} from 'react-icons/bs'

import {WiMoonWaningGibbous5} from 'react-icons/wi'

import * as t from '../colors' 

const themesColor = [
    {
      subject:'theme',
      color:t.aqua
    },
    {
      subject:'theme',
      color:t.green
    },
    {
      subject:'theme',
      color:t.crimson
    },
    {
      subject:'theme',
      color:t.darkOrchid
    },
    {
      subject:'mode',
      bg:t.darkBlack,
      bg2:t.lightBlack,
      color:t.brightWhite,
      color2:t.offWhite,
      icon:<WiMoonWaningGibbous5 fill='#000' className='clicked'/>
    },
    {
      subject:'mode',
      bg:t.brightWhite,
      bg2:t.offWhite,
      color:t.darkBlack,
      color2:t.lightBlack,
      icon:<BsFillSunFill fill='#fff' className='clicked'/>
    },
]

export default themesColor