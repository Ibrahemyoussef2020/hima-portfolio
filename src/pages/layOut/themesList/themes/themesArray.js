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
      color:'dark-mode',
      icon:<WiMoonWaningGibbous5 fill='#000' className='clicked'/>
    },
    {
      subject:'mode',
      color:'light-mode',
      icon:<BsFillSunFill fill='#fff' className='clicked'/>
    },
]

export default themesColor