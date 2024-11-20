import React from 'react'

export const Loading = () => {
  return (
    <>
 <div className='w-screen h-screen bg-black flex justify-center items-center'>
       <div className='w-[100px] h-[100px] bg-orange-400 rounded-full animate-spin'>
             <div className='w-[90px] h-[90px] bg-black rounded-full'>
        </div>
  </div>
</div>
    </>

  )
}

export default Loading