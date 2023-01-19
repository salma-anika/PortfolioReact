import React from 'react'
import Card from '../card/Card'
import heartemoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import humble from '../../img/humble.png';
import resume from '../../components/Services/Resume .pdf';

const Service = () => {
  return (
    <div className='service flex mt-36 mb-52 h-[90vh]'style={{padding:'0 3rem 0 3rem'}}>
        <div className='awesome flex flex-col relative'>
<span>My Awesome</span>
<span>Services</span>
<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
    <br/>been the industry's standard dummy text ever since the 1500s</span>
    <a href={resume} download>
    <button className='button s-button w-[8rem] h-[2rem] mt-[1rem]'>
        Download CV
      </button>
    </a>
     
      <div className='blur s-blur absolute h-[11rem] w-[21rem] top-[13rem] left-[-18rem] ' style={{background:'#ABF1FF94'}}>

</div>
        </div>
        <div className='cards left-[14rem] relative' >
<Card className='absolute'
emoji={heartemoji}
heading={'Design'}
detail={"Figma, Sketch , Photoshop, Adobe XD"}/>
        </div>
       
       
        <div className='cards left-[-4rem] top-[12rem] relative'>
<Card className='absolute'
emoji={glasses} 
heading={'Developer'}
detail={"Html, css , javascript, React"}/>
        </div>
       
        <div className='blur s-blur2 absolute h-[11rem] w-[21rem] left-[14rem] top-[8rem] ' style={{background:"var(--purple)"}}>

</div>
        <div className='cards left-[12rem] top-[19rem] relative'>
<Card className='absolute'
emoji={humble}
heading={'UI/UX'}
detail={"Figma, Sketch , Photoshop, Adobe XD"}/>
        </div>
    </div>
  )
}

export default Service