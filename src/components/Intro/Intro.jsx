import React from 'react';
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import emoji from '../../img/glassesimoji.png';
import { image } from './../../../node_modules/tailwindcss/src/util/dataTypes';
const Intro = () => {
  return (
    <div className='intro flex mt-24 h-[77vh]'>
      <div className='i-left flex relative flex-1 flex-col gap-8'>
        <div className='i-name flex flex-col'>
            <span className='font-bold text-[3rem]'>Hi! I Am</span>
            <span className='font-bold text-[3rem]'>Salma Anika</span>
            <span className=' font-thin mt-3 text-[14px]'>Frontend Developer with high level of experience in web designing and development </span>
        </div>
        <button className='button i-button w-[6rem] h-[2rem]'>Hire Me</button>
        <div className='i-icons mt-12 flex gap-1'>
            <img src={Github} className="hover:cursor-pointer " alt="github"/>
            <img src={Instagram} className="hover:cursor-pointer " alt="instagram"/>
            <img src={LinkedIn} className="hover:cursor-pointer " alt="linkedin"/>
        </div>
      </div>
      <div className='i-right flex-1 relative'>
        <img src={Vector1} className='' alt=''/>
        <img src={Vector2} className='' alt=''/>
        <img src={boy} className='' alt=''/>
        <img src={emoji} className=' left-[-24%] top-[-19%] rounded-[50%] p-0 w-[50%]' alt=''/>
        <div className=' left-[68%] top-[-4%]'>
            <Floatingdiv image={crown} txt1='Web' text2='Developer'/>
        </div>
        <div className='top-[18rem] left-[0rem]'>
            <Floatingdiv image={thumbup} txt1='Best Design' text2='Award'/>
        </div>
        <div className='blur absolute h-[14rem] w-[22rem] top-[-18%] left-[56%] rounded-[50%] z-[-9]'>

        </div>
        <div className='blur absolute h-[11rem] w-[21rem] top-[17rem] left-[-9rem] ' style={{background:'#C1F5FF'}}>

</div>
      </div>
    </div>
  )
}

export default Intro
