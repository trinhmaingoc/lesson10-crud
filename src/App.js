import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tasks: [],
       isDisplayForm: false,
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks')),
      })
    };
  }

  onGenerateData = () => {
    const tasks = [
      {
        id: this.generateID(),
        name: 'Học lập trình',
        status: true,
      },
      {
        id: this.generateID(),
        name: 'Đi bơi',
        status: false,
      },
      {
        id: this.generateID(),
        name: 'Ngủ',
        status: true,
      },
    ];
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  onDisplayForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm,
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    })
  }

  onSubmit = (data) => {
    const { tasks } = this.state;
    data.id = this.generateID();
    tasks.push(data);
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  render() {
    const { tasks, isDisplayForm } = this.state;
    const elmTaskForm = isDisplayForm ? 
      <TaskForm 
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
      /> 
      : '';
    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1> <hr />
        </div>

        <div className="row">
          {elmTaskForm}

          <div className={isDisplayForm ? "col-xs-12 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={this.onDisplayForm}
            >
              <span className="fa fa-plus mr-5"></span>
              Thêm Công Việc
            </button>
            <button 
              type="button" 
              className="btn btn-danger ml-5"
              onClick={this.onGenerateData}
            >
              Generate Data
            </button>
            {/* Search - Sort */}
            <Control />
            {/* List */}
            <TaskList tasks={tasks} />
          </div>

        </div>
      </div>
    )
  }
}

export default App;
