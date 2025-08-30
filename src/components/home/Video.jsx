import React from 'react'
import VIDIE from "../../../public/media/83c745cf.mp4"

const Video = () => {
  return (
    <div className='h-full w-full'> 
    <video className='h-full w-full object-cover' autoPlay loop muted src={VIDIE}> </video>
    </div>
  )
}

export default Video