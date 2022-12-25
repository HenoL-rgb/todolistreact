import React from 'react'
import ListItem from './ListItem'
import './TasksListStyles.css'


export default function TasksList({list, remove}) {

    return (
    <div>
        {list.map(task => <ListItem task={task} key={task.id} remove={remove}></ListItem>)}
    </div>
    )
}
