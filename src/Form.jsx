import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Form({id, add}) {
    const [task, setTask] = useState({
        name: '',
        task: '',
        id: 0,
    });

    useEffect(() => {
        setTask({...task, id: id});
    }, [id])



    function handleChange(e) {
        setTask({...task, [e.target.name]: e.target.value})
    }
    
    function addTask(e) {
        e.preventDefault();
        add(task);
    }

  return (
    <form className='form'>
        <div className="inputs">
          <input onChange={handleChange} name='name'></input>
          <input onChange={handleChange} name='task'></input>
        </div>
        <button type='submit' onClick={addTask}>Add</button>
    </form>
  )
}

export default Form