import React from 'react'
import {ElevatorImage, ElevatorVideo} from "./details"

const ElevatorPitch = () => {
  return (
    <div className=' flex flex-col items-center bg-white text-background px-6 md:px-12 lg:px-24 py-8'>
        <div className='flex flex-col items-center max-w-2xl text-center '>
            <h2 className='text-3xl md:text-5xl font-bold pb-4'>My Elevator <span className='text-primary'>Pitch</span> </h2>
        <p className='font-medium'>Get to know me in just a few minutes. Watch my elevator pitch to understand my passion, skills, and what drives me as a developer.</p>
        </div>
        <div>
            <div className="max-w-3xl pt-6 " data-aos="fade-up">
      <video 
        controls 
        poster={ElevatorImage} className='rounded-lg shadow-lg'
      >
        <source src={ElevatorVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
        </div>
        
        

    </div>
  )
}

export default ElevatorPitch