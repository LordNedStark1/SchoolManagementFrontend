import React from 'react'
import BasicModal from '../mainCreation/CreateCohortModal'
function CreateCohortBody() {
    const handleClick = () =>{

    }
  return (
    <div className='sm:ml-2 md:ml-8'>
        <div className= ' h-9 w-80'>
            <p className= 'hidden bg-blue w-52 h-32 mt-5'> Cohort</p>
        </div>
      <div className='grid place-items-center sm:mt-14 md:ml-44 sm:ml-14 md:mt-24 ml-12' > 
        <img src={'/empty-state.png'} alt='empty state' height={54} width={115}/>
        <h3 className='mt-2 mb-2'>Empty Space</h3>
        <p className='text-wrap mb-2'>No cohort has been created yet, lets get you </p><br/><p className='mb-2'>started by clicking the button below</p>
        <BasicModal/>
        
  </div>
       </div>
  )
}

export default CreateCohortBody
