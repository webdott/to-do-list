import React from 'react';

import './TaskIndicator.style.css';

const TaskIndicator = (props) => {
    return (
        <div className='header'>
            <h3>{`You have  
            ${props.number}  
            ${props.number === 1 ? " task" : " tasks" }`}
            </h3>
        </div>
    ) 
}
       

export default TaskIndicator;