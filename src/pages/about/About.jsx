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
        <h2 className='logo'>ABOUT  <span className='spiceal'>ME</span></h2>
      </div>
        <div>
          <p className='second-title'>
            love  challages simple clean creative code 
          </p>
        </div>
      </header>
      <PERSONEL_INFORMATION>
        <div>
        <ABOUT_IMG_CONTAINER onClick={go_to_Cv} />
        </div>
        <div>
          <ABOUT_UL>
            <li><span>Name</span>  <span>Ibrahim Youssef</span></li>
            <li><span>Phone</span> <span>+201147359396</span></li>
            <li><span>Email</span> <span>ibrahimyoussef95.12@gmail</span></li>
            <li><span>Country</span>  <span>Egypt</span></li>
            <li><span>Education</span>  <span>Alazher , Education , <span className='spiceal'>Technology</span></span></li>
            <li><span>Langages</span> <span>excellent Arabic , good English</span></li>     
          </ABOUT_UL>
        </div>   
      </PERSONEL_INFORMATION>

      <hr/>

      <h2 className='logo'>MIAN <span className='spiceal'> SKILLS</span></h2>
      <SKILLS /> 
    </ABOUT>
  )
}

export default About