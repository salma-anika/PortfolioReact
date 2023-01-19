import React from 'react'
import fiver from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import upwork from '../../img/Upwork.png';
import facebook from '../../img/Facebook.png';
const work = () => {
  return (
    <div className='works flex mt-[4rem] h-[90vh]' style={{padding:'0 3rem 0 3rem'}}>
           <div className='awesome flex flex-col relative'>
<span>Works for All these</span>
<span>Brands & Clients </span>
<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
    <br/>been the industry's standard dummy text ever since the 1500s
    <br/>been the industry's standard dummy text ever since the 1500s
    <br/>been the industry's standard dummy text ever since the 1500s
    <br/>been the industry's standard dummy text ever since the 1500s
    <br/>been the industry's standard dummy text ever since the 1500s
    </span>
   
    <button className='button s-button w-[8rem] h-[2rem] mt-[1rem]'>
       Hire Me
      </button>
  
     
      <div className='blur s-blur absolute h-[11rem] w-[21rem] top-[13rem] left-[-18rem] ' style={{background:'#ABF1FF94'}}>

</div>
</div>
<div className='w-right relative'>
    <div className='w-mainCircle bg-white relative w-[18rem] h-[18rem] left-[9rem] top-[2rem] rounded-[100%]' style={{boxShadow:'var(--smboxShadow)'}}>
        <div className='w-secCircle w-[6rem] h-[6rem] absolute flex bg-none justify-center items-center rounded-[100%] bg-white'
        style={{border:'1px solid #ebebeb',boxShadow:'var(--smboxShadow)'}}>
            <img src={facebook} alt="facebook" style={{transform:'scale(0.6)'}}/>
        </div>
        <div className='w-secCircle w-[6rem] h-[6rem] absolute flex bg-none justify-center items-center rounded-[100%] bg-white'
        style={{border:'1px solid #ebebeb',boxShadow:'var(--smboxShadow)'}}>
            <img src={upwork} alt="upwork"  style={{transform:'scale(0.6)'}}/>
        </div>
        <div className='w-secCircle w-[6rem] h-[6rem] absolute flex bg-none justify-center items-center rounded-[100%] bg-white'
        style={{border:'1px solid #ebebeb',boxShadow:'var(--smboxShadow)'}}>
            <img src={amazon} alt="amazon"  style={{transform:'scale(0.6)'}}/>
        </div>
        <div className='w-secCircle  w-[6rem] h-[6rem] absolute flex bg-none justify-center items-center rounded-[100%] bg-white'
        style={{border:'1px solid #ebebeb',boxShadow:'var(--smboxShadow)'}}>
            <img src={fiver} alt="fiver  style={{transform:'scale(0.6)'}}"/>
        </div>
    </div>
    <div className='w-backCircle blueCircle h-[13rem] w-[13rem] absolute rounded-[100%] z-[-1] left-[18rem] top-[0rem] '
style={{background:'#1949B8'}}></div>
<div className='w-backCircle yellowCircle h-[13rem] w-[13rem] absolute rounded-[100%] z-[-1] left-[18rem] top-[8rem] '
style={{background:'#F5C32C'}}></div>
</div>

        </div>
      
    
  )
}

export default work
