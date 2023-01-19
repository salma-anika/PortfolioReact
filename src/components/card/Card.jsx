import React from 'react'

const Card = ({emoji,heading,detail}) => {
  return (
    <div className='card flex flex-col absolute gap-4 text-center items-center w-[13rem] h-[17rem] rounded-[20px]'
    style={{background:'rgba(255,255,255,0.26)',border:'7px solid var(--orangeCard)',boxShadow:'var(--boxShadow)',padding:'0px 26px 2rem 26px'}}>
      <img src={emoji} className="mb-[-2rem] " style={{tranform:'scale(0.5)'}} alt=""/>
      <span>{heading}</span>
      <span className='text-[16px]' style={{color:'var(--gray)'}}>{detail}</span>
      <button className='c-button uppercase bg-white p-[10px] border-none text-[16px] rounded-[7px]' style={{color:'#5290FD',boxShadow:'0px 19px 60px rgba(0 , 0, ,0,0.08'}}>learn more</button>
    </div>
  )
}

export default Card
