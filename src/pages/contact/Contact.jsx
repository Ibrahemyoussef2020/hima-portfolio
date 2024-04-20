import emailjs from '@emailjs/browser';

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
  LISTS_CONTAINER,
  FORM_CONTACT,
  FORM_HEADING
} from './Contact'

import {
contactImgList,
contactTextList 
} from './ContactList.js'
import { useEffect, useState } from 'react'
import { useRef } from 'react';


const Contact = () => {
  /*const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [title,setTitle] = useState('');
  const [message,setMessage] = useState('');
  const [phone,setPhone] = useState('');*/

  const [messageInfo , setMessageInfo] = useState({
    name:'',
    email:'',
    title:'',
    message:'',
    phone:''
  });

  const formRef = useRef()


  const handleMessageInfoChange = (e)=>{
    const {name,value} = e.target;

    setMessageInfo({
      ...messageInfo,
      [name]:value
    })
  }

  const handleSubmitMessage = (e)=> {
    e.preventDefault();
    emailjs.sendForm("service_mkjlzsd" , "template_4woy2un" , formRef.current , "fCTfbPOww761oArPb")
    formRef.current.reset()
  }

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

    <LISTS_CONTAINER>

      <FORM_HEADING>
        Do not hesitate to write to me via my private email for any Idea
      </FORM_HEADING>

    <FORM_CONTACT>    
    <form 
      ref={formRef} 
      onSubmit={handleSubmitMessage}
      action="https://formsubmit.co/https://formsubmit.co/el/kixuko"
      method="POST"
    >
        
      <div className='input-wrapper'>
        <h3>Enter Your Name *</h3>
        <input type="text" name='name' onChange={e => handleMessageInfoChange(e)} required/>
      </div>
      <div className='input-wrapper'>
        <h3>Enter Your Email *</h3>
        <input type="text" name='email' onChange={e => handleMessageInfoChange(e)} required/>
      </div>
      <div className='input-wrapper'>
        <h3>Enter Msg Title *</h3>
        <input type="text" name='title' onChange={e => handleMessageInfoChange(e)} required/>
      </div>
      <div className='input-wrapper'>
        <h3>Enter Your Phone</h3>
        <input type="text" name='phone' onChange={e => handleMessageInfoChange(e)}/>
      </div>
      <textarea type="text" name='message' onChange={e => handleMessageInfoChange(e)} required>
      </textarea>
      <button type='submit' onClick={handleSubmitMessage}>
        Submit
      </button>
    </form>
    </FORM_CONTACT> 
    </LISTS_CONTAINER>   
    </CONTACT>
  )
}

export default Contact