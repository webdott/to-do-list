import React from 'react';

import './ToDo.style.css';

const ToDo = (props) => {
   return (
       <div className='to-do'>
           {props.task}
           <i className="fas fa-minus-circle right" onClick={() => props.onDelete(props.index)}></i>
       </div>
   ) 
}

export default ToDo;