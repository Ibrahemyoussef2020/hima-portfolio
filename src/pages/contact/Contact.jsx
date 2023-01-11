import {
  go_to_Link
} from '../../cv/Cv_Link'

import {
  SMALL_BULL
} from '../../components'

import {
  CONTACT,
  CONTACT_UL,
} from './Contact'

import {
contactImgList,
contactTextList 
} from './ContactList.js'


const Contact = () => {
  return (
    <CONTACT>
      <h1 className='logo'>
        CONTACT <span className='spiceal'> ME </span> VIA
      </h1>
      <CONTACT_UL>
        {
          contactTextList.map(contact =>
            <li key={contact.name}>
              <span>{contact.name}</span>
              <span>{contact.sub}</span>
            </li>
        )}
      </CONTACT_UL>

      <div style={{width : '300px' , margin:'0 auto' , display:'flex' , justifyContent:'space-between'}}>
        {
          contactImgList.map(contact =>
            <SMALL_BULL key={contact.name} onClick={()=>go_to_Link(contact.link)}>
                {contact.icon}
            </SMALL_BULL>
        )}
      </div>
    </CONTACT>
  )
}

export default Contact