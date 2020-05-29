import React, {Component} from 'react';

import TaskIndicator from './components/TaskIndicator/TaskIndicator.component';

import InputForm from './components/InputForm/InputForm.component.jsx';

import ToDoList from './components/ToDoList/ToDoList.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      lists: [
        { task: 'task1', id: 1 },

        { task: 'task2', id: 2 },

        { task: 'task3', id: 3 }
      ],

      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  handleSubmit = (e) => {
    let list;
    e.preventDefault();
    if (this.state.input === '') {
      return;
    } else {
     list = {task: this.state.input, id:this.state.lists.length + 1};
    };

    this.setState({ lists: [...this.state.lists, list], input: '' });
    document.getElementById('myForm').reset();
  }

  handleDelete = (index) => {
    const filteredList = this.state.lists.filter(list => {
      return list.id !== index;
    })
    this.setState({lists: filteredList})
  }

  render () {
    return (
      <div className='App'>
        <InputForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>

        <ToDoList  lists={this.state.lists} onDelete={this.handleDelete}/>

        <TaskIndicator  number={this.state.lists.length}/>
      </div>
      
    )
  }
}

export default App;
