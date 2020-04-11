import React, { Component } from 'react'
import TaskItem from './TaskItem'

export class TaskList extends Component {

  render() {
    const { tasks } = this.props;
    const elmTasks = tasks.map((task, index) => (
      <TaskItem 
        key={index}
        task={task}
        index={index}
        onUpdateStatus={this.props.onUpdateStatus}
        onDeleteItem={this.props.onDeleteItem}
        onUpdateItem={this.props.onUpdateItem}
      />
    ))
    return (
      <div className="row mt-15 tasklist">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 table-responsive">
          <table className="table table-bordered table-hover text-nowrap">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Tên</th>
                <th className="text-center">Trạng Thái</th>
                <th className="text-center">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="filterName"
                  />
                </td>
                <td>
                  <select
                    name="filterStatus"
                    className="form-control"
                  >
                    <option value={-1}>Tất Cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích Hoạt</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {elmTasks}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TaskList
