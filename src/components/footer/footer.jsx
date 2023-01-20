import React from 'react'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
const footer = () => {
  return (
    <div className='footer flex items-center relative mt-[-7rem]' style={{margin:'-0.5rem  -3.5rem'}}>
      <img src={Wave} alt="" style={{width:'100%'}}/>

      <div className='f-content absolute flex flex-col justify-center items-center w-[100%] mt-16 gap-16 text-white'>
<span className='text-[25px] font-bold'>anikaavaa@gmail.com</span>
<div className='f-icons flex gap-8 font-bold text-[30px]'>
<Insta />
<Git/>
<Facebook/>
</div>
      </div>
    </div>
  )
}

export default footer
