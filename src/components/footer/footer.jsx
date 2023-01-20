import React from 'react'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
const footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width:'100%'}}/>

      <div className='f-content'>
<span>anikaavaa@gmail.com</span>
<div className='f-icons'>
<Insta/>
<Git/>
<Facebook/>
</div>
      </div>
    </div>
  )
}

export default footer
