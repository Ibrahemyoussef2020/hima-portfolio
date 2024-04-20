import { NavLink } from 'react-router-dom'
import{
  Problem_Solving_,
  JS_Armies,
  JS_Sites,
} from './Problem_Solving'

import {LARGE_BULL} from '../../components'

const Problem_Solving = () => {
  return (
    <Problem_Solving_ className='page Problem_Solving'>

      <JS_Armies className='css-img'>
        <img src="images/right-army.png" alt="army"/>
          <h2>JS</h2>
        <img src="images/right-army.png" alt="army"/>
      </JS_Armies>
        
      <JS_Sites>
        <LARGE_BULL>Codewars</LARGE_BULL>
        <LARGE_BULL>jscodebox</LARGE_BULL>
    </JS_Sites>

      <div className="algorithm__intro">
      <h3>My Javascript Problem Solvings</h3>
      <p>I will coustmize this part to problem solving</p>

      <div>
        <div>
            <h4 className='site'>1 - codewars : </h4>
            <a href='https://www.codewars.com/users/%20Ibrahemyoussef2020%20' 
              target="_blank">
              Go to : codewars/Ibrahim_Youssef <br/> <br/>
              <img src='https://www.codewars.com/users/%20Ibrahemyoussef2020%20/badges/large' alt='codewars'/>
            </a>
          </div>

          <div>
            <h4 className='site'>2 - jscodebox : </h4>
            <a href='https://jscodebox.com/profile/Ibrahim_Youssef' 
              target="_blank">
              Go to : jscodebox/Ibrahim_Youssef
            </a>
          </div>
        </div>
      </div>
    </Problem_Solving_>
  )
}

export default Problem_Solving