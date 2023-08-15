import {useState} from 'react'
import { useSelector,useDispatch} from 'react-redux';

import {BsBoxArrowUpRight} from 'react-icons/bs'

import {addFilter} from '../../redux/slices/FilterProjects'

import {ProjectsList,ProjectsFilterList}from './ProjectsList'

import {go_to_Link} from '../../cv/Cv_Link'



import{
  PROJECT_FILTER_CONTAINER,
  PROJECT_FILTER,
  SELECT_BULL,
  /*  */
  Hr,
  /* */
  PROJECT,
  PROJECT_CONTAINER,
  PROJECT_FRONT,
  PROJECT_BACK
} from './project/Project'


const Portfolio = () => {
  const [webType,setWebType] = useState('all');
  const [hover,setHover] = useState('all');
  const [toleft,setLeft] = useState(0)
  const [open,setOpen] = useState(true)

  const dispatch = useDispatch()

  const {web} = useSelector(state => state.filter_Projects)

  const hundle_web_filter = (web,index)=>{
    setHover(web)
    setLeft(index)
    dispatch(addFilter(web))
    setWebType(web)
  }

 



  return (
    <div>
      <PROJECT_FILTER_CONTAINER>
        <SELECT_BULL left={`${(toleft * 60) + toleft * 4 + 18}px`}/>
        <PROJECT_FILTER>
          {ProjectsFilterList.map((part,index) => 
            <li key={part.text} 
              onClick={()=>hundle_web_filter(part.text,index)}
              >          
              <span className={`icon ${hover === part.text ? 'up' : 'dowen'}`}>{part.icon}</span>
              <span className={`text ${hover === part.text ? 'up' : 'dowen'}`}>{part.text}</span>
            </li>
          )}
        </PROJECT_FILTER>
      </PROJECT_FILTER_CONTAINER>
      <Hr/>
      <PROJECT_CONTAINER>
        {ProjectsList
         .filter(project => webType === 'all' ? project : project.web === webType) 
         .map(project =>         
            <PROJECT key={project.title}
              onMouseEnter={()=>setOpen(project.title)}
              onMouseLeave={()=>setOpen('')}
            >
                <PROJECT_FRONT 
                  className={open === project.title ? 'close' : 'open'}
                >            
                <ul>
                  <li><h4>project : {project.title}</h4></li>
                  <li><BsBoxArrowUpRight onClick={()=>go_to_Link(project.link)}/></li>  
                { project.tools.map(tool =>
                  <li key={tool}>{tool}</li>  
                )} 
                </ul>                 
                </PROJECT_FRONT>

                <PROJECT_BACK>
                    <img src={`images/projects-img/${project.title}-front.webp`}/>
                    <div></div>                  
                </PROJECT_BACK>
            </PROJECT>
        )}
      </PROJECT_CONTAINER>
    </div>
  )
}

export default Portfolio