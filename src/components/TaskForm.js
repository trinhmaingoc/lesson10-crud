import React, { Component } from 'react'

export class TaskForm extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        {/* Form */}
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              Thêm Công Việc
                  <span className="fa fa-times-circle text-right"></span>
            </h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label>Tên: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label>Trạng Thái: </label>
                <select
                  name="status"
                  className="form-control"
                >
                  <option value={true}>Kích Hoạt</option>
                  <option value={false}>Ẩn</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  <span className="fa fa-plus mr-5" ></span>Lưu Lại
                    </button> &nbsp;
                    <button type="reset" className="btn btn-danger">
                  <span className="fa fa-close mr-5" ></span>Hủy Bỏ
                    </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskForm;
