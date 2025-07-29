import React from 'react'

export default function Form({addTask}) {
  return (
    <form onSubmit={addTask} className='form'>
        <input type="text" className='form-input' name='task'/>
        <button className='form-button'>Add task</button>
    </form>
  )
}
