import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Hoc from '../../img/hoc.png';
import music from '../../img/musicapp.png';
import ecommerce from '../../img/ecommerce.png';
import 'swiper/css';
const Portfolio = () => {
  return (
    <div className='portfolio overflow-visible flex justify-center items-center flex-col h-[70vh]'>
      <span className='font-bold text-[2.5rem] text-black'>Recent Projects</span>
      <span className='font-bold text-[2rem] ' style={{color:'var(--orange'}}>Portfolio</span>


      <Swiper className='portfolio-slider '
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      >
        <SwiperSlide>
            <img src={Sidebar} alt='sidebar' className='w-[19rem] rounded-[19px]' style={{filter:'drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))'}}/>
        </SwiperSlide>
        <SwiperSlide >
            <img src={Hoc} alt='hoc' className='w-[19rem] rounded-[19px]' style={{filter:'drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))'}}/>
        </SwiperSlide>{" "}
        <SwiperSlide >
            <img src={ecommerce} alt='ecommerce' className='w-[19rem] rounded-[19px]' style={{filter:'drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))'}}/>
        </SwiperSlide>
        <SwiperSlide >
            <img src={music} alt='music' className='w-[19rem] rounded-[19px]' style={{filter:'drop-shadow(-12px 15px 13px rgba(0, 0, 0, 0.25))'}}/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
