import React from 'react';

import ToDo from '../ToDo/ToDo.component.jsx';

import './ToDoList.style.css';

const ToDoList = (props) => {
    const toDoList = props.lists.map(list => {
        return (
            <ToDo key={list.id} task={list.task} index={list.id} onDelete={props.onDelete}/>
        )
    })
    
    return (
        <div className='toDoList'>
            { toDoList }
        </div>
    )
}

export default ToDoList;