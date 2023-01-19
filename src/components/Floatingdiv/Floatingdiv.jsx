import React from 'react'

const Floatingdiv = ({image,txt1,txt2}) => {
  return (
    <div>
      <div className='floatingdiv flex justify-around bg-white items-start rounded-[17px] h-[4.5rem]'>
        <img src={image} alt="crown"/>
        <span  className='  font-sans text-[16px]'>{txt1}<br/>{txt2}</span>
      </div>
    </div>
  )
}

export default Floatingdiv
