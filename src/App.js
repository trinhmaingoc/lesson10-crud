import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tasks: []
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
  
  render() {
    const { tasks } = this.state;
    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1> <hr />
        </div>

        <div className="row">
          <TaskForm />

          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
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
