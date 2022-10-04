import React from 'react';
import './header.css';
import Input from './Input';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { useState } from 'react';

const Header = () => {
  const [buttonText, setButtonText] = useState('Get Started');
  const [entry, setEntry] = useState('');
  const [buttonActive, setButtonActive] = useState(false);


  function getStarted (){
    buttonText === 'Get Started' && buttonActive ? setButtonText('Loading ...') : setButtonText('Get Started')

    //validate input
  }

  function validateEmail (data){
    setEntry(data)
    console.log(entry)
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    re.test(entry) ? setButtonActive(true) : setButtonActive(false)

  }

  return (
    <div className='gpt3__header section_padding'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 Open AI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='gpt3__header-content__input'>
          <Input type={"email"} status={entry} placeholder="Your email address" onChange={(e)=>{validateEmail(e.target.value)}}/>
          <button type='button' onClick={getStarted}>{buttonText}</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
            <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header