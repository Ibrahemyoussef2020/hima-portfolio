import {
  go_to_Link
} from '../../cv/Cv_Link'

import {
  SMALL_BULL
} from '../../components'

import {
  CONTACT,
  CONTACT_UL,
  BULL_UL,
  LISTS_CONTAINER
} from './Contact'

import {
contactImgList,
contactTextList 
} from './ContactList.js'
import { useEffect, useState } from 'react'


const Contact = () => {
  return (
    <CONTACT>
      <h1 className='logo'>
        CONTACT <span className='spiceal'> ME </span> VIA
      </h1>
      <p className='second-title'>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS</p>
     
     <LISTS_CONTAINER>
      <CONTACT_UL>
        {
          contactTextList.map(contact =>
            <li key={contact.name}>
              <span>{contact.name}</span>
              <span>
                <a href={contact.sub} target='_blank'>{contact.title}</a>
              </span>
            </li>
        )}
      </CONTACT_UL>

      <BULL_UL>
        {
          contactImgList.map(contact =>
            
            <SMALL_BULL 
              key={contact.name} 
              onClick={()=>go_to_Link(contact.link)}>
                  {contact.icon}
            </SMALL_BULL>
       
        )}
      </BULL_UL>
      </LISTS_CONTAINER>
    </CONTACT>
  )
}

export default Contact