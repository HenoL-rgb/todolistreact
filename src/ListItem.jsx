import React from 'react';
import './ListItemStyles.css'

function ListItem({task, remove}) {

    function removeTask() {
        remove(task.id);
    }
    return (
        <li>
            <div className='task'>
                <h2>{task.name}</h2>
                <div>{task.task}</div>
            </div>
            <div className='controllers'>
                <button onClick={removeTask}>Delete</button>
                <button>Edit</button>
            </div>

        </li>
    );
}

export default ListItem;