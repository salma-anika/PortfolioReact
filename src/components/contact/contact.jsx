import React , {useRef} from 'react'


const contact = () => {

  return (
    <div className='contact-form flex h-[80vh] mt-16 ' style={{padding:'0 3rem 0 3rem'}}>
      <div className='w-left'>
        <div className='awesome flex flex-col relative'>
            <span>Get in Touch</span>
            <span>Contact Me</span> 
            <div className='blur s-blur absolute h-[11rem] w-[21rem] top-[13rem] left-[-18rem] ' style={{background:'#ABF1FF94'}}></div>
        </div>
      </div>
      <div className='c-right flex flex-1 relative justify-center'>
        <form className='flex flex-col items-center gap-8'>
            <input type="text" name="user_name" className="user" placeholder="Enter Name"/>
            <input type="email" name="email" className="user" placeholder="Enter Email"/>
            <textarea type="text" name="message" className="user" placeholder="Message"/>
            <button type="submit" value="send" className="button-contact"> Send </button> 
            <div className='blur c-blur1 top-[1rem] left-[8rem] absolute h-[11rem] w-[10rem]' style={{background:'var(--purple)'}}></div>
        </form>
      </div>
    </div>
  )
}

export default contact
