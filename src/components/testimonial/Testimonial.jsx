import React from 'react'
import { Swiper ,SwiperSlide } from 'swiper/react'
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from "swiper";
const Testimonial = () => {
    const clients=[
        {
            img:profile1,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            img:profile2,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            img:profile3,
            review:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        }
        ]
  return (
   

    <div className='t-wrapper  flex flex-col justify-center items-center relative gap-8 h-[100vh] mt-[7rem]' style={{padding:'0 3rem 0 3rem'}}>
      <div className='t-heading m-1'>
        <span className='text-[2rem] font-bold '>Clients always get</span>
        <span className='text-[2rem] font-bold ' style={{color:'var(--orange)'}}> Exceptional work</span>
        <span className='text-[2rem] font-bold'> from me...</span>
        <div className='blur t-blur1 top-[16rem] left-[38rem] absolute h-[11rem] w-[10rem]' style={{background:'var(--purple)'}}>

</div>
<div className='blur t-blur2 top-[9rem] left-[0rem] absolute h-[11rem] w-[10rem]' style={{background:'skyblue'}}>

</div>
</div>
<Swiper
modules={[Pagination]}
slidesPerView={1}
pagination = {{ clickable: true}}

>
    {clients.map((client,index)=>{
        return(
            <SwiperSlide key={index} className='flex justify-center items-center'>
                <div className='testimonial flex flex-col justify-evenly items-center w-[30rem] h-[12rem] p-8 rounded-[20px]'
style={{background:'rgba(255,255,255,0.26)',border:'7px solid var(--blueCard)', boxShadow:'var(--boxShadow)' }}>
                <img src={client.img} alt="" className='h-[6rem] w-[6rem] rounded-[100%]'/>
                <span style={{color:'var(--gray)'}}>{client.review}</span>
                </div>
            </SwiperSlide>
        );
    })}
</Swiper>



      </div>
    
  )
}

export default Testimonial
