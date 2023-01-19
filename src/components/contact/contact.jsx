import React from 'react'

const contact = () => {
  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
            <span>Get in Touch</span> 
            <span>Contact Me</span> 
            <div className='blur s-blur absolute h-[11rem] w-[21rem] top-[13rem] left-[-18rem] ' style={{background:'#ABF1FF94'}}></div>
        </div>
      </div>
      <div className='c-right'>
        <form>
            <input type="text" name="user_name" className="user" placeholder="Enter Name"/>
            <input type="email" name="email" className="user" placeholder="Enter Email"/>
            <textarea type="text" name="message" className="user" placeholder="Message"/>
            <input type="submit" value="send" className="button"/> 
            <div className='blur t-blur1 top-[16rem] left-[38rem] absolute h-[11rem] w-[10rem]' style={{background:'var(--purple)'}}></div>
        </form>
      </div>
    </div>
  )
}

export default contact
