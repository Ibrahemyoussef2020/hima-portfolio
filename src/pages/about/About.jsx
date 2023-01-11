import {
  ABOUT ,
  ABOUT_IMG_CONTAINER,
  ABOUT_UL,
  PERSONEL_INFORMATION,

  /*****/

  SKILLS
}from './About'

import go_to_Cv from '../../cv/Cv_Link'

const About = () => {

  return (
    <ABOUT className='About page'>
      <header>
      <div>
        <h1 className='logo'>Who is <span className='spiceal'>Ibrahim</span></h1>
      </div>
        <div>
          <p>
            I adore coding so I strive to upgrade my self and face the code challange, I have an obsession with 
            <span className='spiceal'> clean </span> ,
            <span className='spiceal'> creative </span> code
          </p>
        </div>
      </header>
      <PERSONEL_INFORMATION>
        <div>
        <ABOUT_IMG_CONTAINER onClick={go_to_Cv} />
        </div>
        <div>
          <ABOUT_UL>
            <li><span>Name</span>  <span>Ibrahim youssef</span></li>
            <li><span>Born</span>  <span>13-12-1995</span></li>
            <li><span>Country</span>  <span>Egypt</span></li>
            <li><span>Education</span>  <span>+= Technology</span></li>
            <li><span>Langages</span> <span>good Arabic,not bad English</span></li>
            <li><span>Phone</span> <span>+201147359396</span></li>
            <li><span>Email</span> <span>ibrahimyoussef95.12@gmail.com</span></li>
            <li><span>Hotmail</span> <span>ibrahem.youssef2020@hotmail.com</span></li> 
          </ABOUT_UL>
        </div>   
      </PERSONEL_INFORMATION>

      <hr/>

      <h1 className='logo'>MIAN <span className='spiceal'> SKILLS</span></h1>
      <SKILLS /> 
    </ABOUT>
  )
}

export default About