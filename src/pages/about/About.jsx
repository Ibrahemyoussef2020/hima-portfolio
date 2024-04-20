import { TbBrandNextjs} from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { SiRedux,SiTypescript,SiJavascript    } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { TbBrandCss3, TbBrandHtml5 } from "react-icons/tb";

import {
  ABOUT ,
  ABOUT_IMG_CONTAINER,
  COAD_SKILLS,
  ABOUT_UL,
  COAD_SKILLS_WRAPPER,
  PERSONEL_INFORMATION,
  Service,
  Services,

  /*****/

  SKILLS,
  MAIN_SKILLS_WRAPPER,
  MAIN_SKILLS
}from './About'

import go_to_Cv from '../../cv/Cv_Link'
import { IoLogoGameControllerB } from 'react-icons/io'
import { GrApple } from 'react-icons/gr'
import { SiTestinglibrary } from 'react-icons/si'
import { MuiLogo } from "../../components/Mui";

const About = () => {

  return (
    <ABOUT className='About page'>
      <header>
      <div>
        <h2 className='logo about-heading'>ABOUT  <span className='spiceal'>ME</span></h2>
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
            <li><span>Langages</span> <span>fluent Arabic , good English</span></li>     
          </ABOUT_UL>
        </div>   
      </PERSONEL_INFORMATION>

      <hr />

      <h2 className='logo'>MIAN <span className='spiceal'> SERVICES</span></h2>
      <Services>
        <Service>
            <SiTestinglibrary/>
            <h3>Web Site Development</h3>
            <p>
              I have implemented several sites with my all skills witch writed here as evidence of mastering experience.
            </p>
        </Service>
        <Service>
            <GrApple/>
            <h3>Web App Development</h3>
            <p>
              Implemented also some apps where it has most benefits of programing Powerfull.
            </p>
        </Service>
        <Service>
            <IoLogoGameControllerB/>
            <h3>Web Game Development</h3>
            <p>
            Implemented also some apps since it heiarly sharpen the programing logic.
            </p>
        </Service>
      </Services>

      <hr/>
      <h2 className='logo'>CODE <span className='spiceal'> SKILLS</span></h2>

      <COAD_SKILLS_WRAPPER>
        <COAD_SKILLS>
          <article>
            <div className='bull'></div>
            <div className="arrow"></div>
            <h4 className="title">
              Design Pattern
            </h4>
            <p className='desc'>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </span>
            </p>
          </article>
          <article>
            <div className='bull'></div>
            <div className="arrow"></div>
            <h4 className="title">
              Solid Principles
            </h4>
            <p className='desc'>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </span> 
            </p>
          </article>
          <article>
            <div className='bull'></div>
            <div className="arrow"></div>
            <h4 className="title">
              Clean Code
            </h4>
            <p className='desc'>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </span>
            </p>
          </article>
        </COAD_SKILLS>

        <COAD_SKILLS>
          <article>
              <div className='bull'></div>
              <div className="arrow"></div>
              <h4 className="title">
                Algorithm
              </h4>
              <p className='desc'>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </span>
              </p>
            </article>
            <article>
              <div className='bull'></div>
              <div className="arrow"></div>
              <h4 className="title">
                Problem Solving
              </h4>
              <p className='desc'>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                </span>
              </p>
            </article>
            <article>
            <div className='bull'></div>
            <div className="arrow"></div>
            <h4 className="title">
              Data Structure
            </h4>
            <p className='desc'>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              </span>
            </p>
          </article>
        </COAD_SKILLS>
      </COAD_SKILLS_WRAPPER>


      <hr/>
      <h2 className='logo'>MIAN <span className='spiceal'> SKILLS</span></h2>
 
      <MAIN_SKILLS_WRAPPER>
        <MAIN_SKILLS>
          <div className='skill left'>
            <BsBootstrap />
            <h4>bootstarp</h4>
          </div>
          <div className='skill right'>
            <TbBrandNextjs/>
            <h4>next</h4>
          </div>

          <div className='double-skills'>
            <h3>Libraries</h3>
            <div className='skill left'>
              <h4>Redux</h4>
              <SiRedux />
            </div>
            <div className='skill center mui'>
              <MuiLogo/>
              <h4>MUI</h4>
            </div>
            <div className='skill right'>
              <RiReactjsFill />
              <h4>react</h4>
            </div>
          </div>
        </MAIN_SKILLS>
        <MAIN_SKILLS>
          <div className='skill left'>
            <TbBrandCss3/>
            <h4>css</h4>
          </div>
          <div className='skill right'>
            <TbBrandHtml5 />
            <h4>html</h4>
          </div>

          <div className='double-skills'>
            <h3>Languages</h3>
            <div className='skill left'>
              <SiTypescript  />
              <h4>Typescript</h4>
            </div>
            <div className='skill center'>
              <FaSass/>
              <h4>sass</h4>
            </div>
            <div className='skill right'>
              <SiJavascript />
              <h4>javascript</h4>
            </div>
          </div>
        </MAIN_SKILLS>
      </MAIN_SKILLS_WRAPPER> 

      <SKILLS /> 
    </ABOUT>
  )
}

export default About