import React from 'react'

const Experience = () => {
  return (
    <div className='experience flex justify-center items-center gap-20 mb-32 h-[30vh]'>
        <div className='achievement  '>
            <div className='circle bg-white rounded-[100%] items-center justify-center font-bold h-[7rem] w-[7rem] text-[2.5rem] mb-[2rem] flex relative'>
                5+

            </div>
            <span className='uppercase' style={{ color: 'var(--black)',
    fontWeight: 'bold',fontSize: '1rem',}}> years </span><br/>
            <span style={{color:'var(--orange)', }} className='text-center'>experience</span>
        </div>
        <div className='achievement flex flex-col items-center '>
            <div className='circle bg-white rounded-[100%] items-center justify-center font-bold h-[7rem] w-[7rem] text-[2.5rem] mb-[2rem] flex relative'>
                15+

            </div>
           
            <span className='uppercase' style={{ color: 'var(--black)',
    fontWeight: 'bold',fontSize: '1rem',}}>completed</span>
            <span style={{color:'var(--orange)'}}>projects</span>
        </div>
        <div className='achievement flex flex-col items-center'>
            <div className='circle bg-white rounded-[100%] items-center justify-center font-bold h-[7rem] w-[7rem] text-[2.5rem] mb-[2rem] flex relative'>
                2

            </div>
            <span className='uppercase'style={{ color: 'var(--black)',
    fontWeight: 'bold',fontSize: '1rem',}}>companies</span>
            <span style={{color:'var(--orange)'}}>work</span>
           
        </div>
    </div>
  )
}

export default Experience
