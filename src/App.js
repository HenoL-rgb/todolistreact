import './App.css';
import React, { useEffect, useState } from 'react';
import TasksList from './TasksList';
import Form from './Form';

function App() {

  const [list, setList] = useState([]);
  const [id, setId] = useState(0);


  useEffect(() => {
    const newList = localStorage.getItem('tasks');
    if(newList) {
      setList(JSON.parse(newList))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(list))
    setId(list.at(-1)?.id + 1 || 0);

  }, [list])
  

  function addTask(task) {
    setList(prev => [...prev, task]);

  }

  function removeTask(id) {
    setList(prev => prev.filter(task => task.id !== id))
  }


  return (
    <div className="App">
      <Form add={addTask} id={id}/>
      <div>{id}</div>
      <TasksList list={list} remove={removeTask}></TasksList>
    </div>
  );
}

export default App;
