import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { findIndex } from 'lodash'; // import _ if get all libratory

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditting: null,
      filter: {
        name: '',
        description: '',
        status: -1
      },
      keyword: '',
      sort: {
        by: '',
        value: 1
      }
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks')),
      })
    };
  }

  // onGenerateData = () => {
  //   const tasks = [
  //     {
  //       id: this.generateID(),
  //       name: 'Học lập trình',
  //       status: true,
  //     },
  //     {
  //       id: this.generateID(),
  //       name: 'Đi bơi',
  //       status: false,
  //     },
  //     {
  //       id: this.generateID(),
  //       name: 'Ngủ',
  //       status: true,
  //     },
  //   ];
  //   this.setState({
  //     tasks: tasks,
  //   });
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditting !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditting: null
      })
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditting: null,
      })
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
      taskEditting: null,
    })
  }
  
  onOpenForm = () => {
    this.setState({
      isDisplayForm: true,
    })
  }

  onSubmit = (data) => {
    const { tasks } = this.state;
    if (data.id) {
      // const index = this.findIndex(data.id);
      const index = findIndex(tasks, (task) => {
        return task.id === data.id;
      });
      tasks[index] = data;
    } else {
      data.id = this.generateID();
      tasks.push(data);
    }
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    const { tasks } = this.state;
    // const index = this.findIndex(id);
    const index = findIndex(tasks, (task) => {
      return task.id === id;
    });
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  }

  // findIndex = (id) => {
  //   const { tasks } = this.state;
  //   let result = -1;
  //   tasks.forEach((task, index) => {
  //     if (task.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // }

  onDeleteItem = (id) => {
    const { tasks } = this.state;
    // const index = this.findIndex(id);
    const index = findIndex(tasks, (task) => {
      return task.id === id;
    });
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.onCloseForm();
    }
  }

  onUpdateItem = (id) => {
    const { tasks } = this.state;
    // const index = this.findIndex(id);
    const index = findIndex(tasks, (task) => {
      return task.id === id;
    });
    const taskEditting = tasks[index];
    this.setState({
      taskEditting: taskEditting,
    });
    this.onOpenForm();
  }

  onFilter = (filterName, filterDescription, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName,
        description: filterDescription,
        status: filterStatus
      },
    });
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    })
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      sort: {
        by: sortBy,
        value: sortValue
      }
    })
  }

  render() {
    let { tasks, isDisplayForm, taskEditting, filter, keyword, sort } = this.state;

    tasks = tasks.filter((task) => {
      return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    // tasks = filter(tasks, (task) => {
    //   return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    // })

    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
        })
      }
      if (filter.description) {
        tasks = tasks.filter((task) => {
          return task.description.toLowerCase().indexOf(filter.description.toLowerCase()) !== -1;
        })
      }
      if (filter.status !== -1) {
        tasks = tasks.filter((task) => {
          return task.status === (filter.status === 0 ? false : true);
        })
      }
    };

    if (sort.by==='name') {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      })
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return sort.value;
        else if (a.status < b.status) return -sort.value;
        else return 0;
      })
    }

    const elmTaskForm = isDisplayForm ?
      <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        task={taskEditting}
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
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-5"></span>
              Thêm Công Việc
            </button>
            {/* <button 
              type="button" 
              className="btn btn-danger ml-5"
              onClick={this.onGenerateData}
            >
              Generate Data
            </button> */}
            {/* Search - Sort */}
            <TaskControl 
              onSearch={this.onSearch}
              onSort={this.onSort}
            />
            {/* List */}
            <TaskList
              tasks={tasks}
              onUpdateStatus={this.onUpdateStatus}
              onDeleteItem={this.onDeleteItem}
              onUpdateItem={this.onUpdateItem}
              onFilter={this.onFilter}
            />
          </div>

        </div>
      </div>
    )
  }
}

export default App;
