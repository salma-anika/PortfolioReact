import React from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
const Toggle = () => {
  return (
    <div className='toggle flex justify-between relative rounded-[1rem] cursor-pointer p-[2px]' style={{border:'3px solid var(--orange)'}}>
      <Sun/>
      <Moon/>
      <div className='t-button'>

      </div>
    </div>
  )
}

export default Toggle
