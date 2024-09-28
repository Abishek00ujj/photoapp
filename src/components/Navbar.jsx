import React from 'react'
export const Navbar =()=> {
  return (
    <div className='w-screen h-auto bg-black flex p-5'>
       <div className='w-[50%]'>
          <p className='text-white font-mono text'>SnapVault⚡</p>
       </div>
       <div className=' w-[50%] flex space-x-5 justify-end items-end'>
<a href='https://codewithabi.vercel.app/'><p className='text-white justify-centre'>About us</p></a>
           <a href='https://codewithabi.vercel.app/'><p className='text-white  justify-centre'>Contact</p></a>
       </div>
    </div>
  )
}

export default Navbar