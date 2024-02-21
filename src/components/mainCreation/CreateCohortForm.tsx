import React from 'react'

function CreateCohortForm() {
    
  return (
    <div>
      <div>
        <h4>Create Cohrt</h4>
        <button
        // onClick={close()}
        >X</button>
      </div>
      <div>
        <label>Cohort Name</label>
        <input
        title='Cohort Name'
        />
      </div>
    </div>
  )
}

export default CreateCohortForm
