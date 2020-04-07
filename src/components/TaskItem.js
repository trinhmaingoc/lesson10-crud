import React, { Component } from 'react'

export class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Ở nhà phòng chống dịch Covid 19 lan rộng ra cộng đồng</td>
        <td className="text-center">
          <span className="label label-danger">Kích Hoạt</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-sm btn-warning">
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button> &nbsp;
          <button type="button" className="btn btn-sm btn-danger">
            <span className="fa fa-trash mr-5"></span>Xóa
          </button>
        </td>
      </tr>
    )
  }
}

export default TaskItem
