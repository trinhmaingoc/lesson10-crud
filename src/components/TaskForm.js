import React, { Component } from 'react'

export class TaskForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       status: true,
    }
  }
  
  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if (name === "status") {
      value = target.value === "true" || target.value === true ? true : false;
    }
    this.setState({
      [name]: value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state)
  }

  render() {
    const { name, status } = this.state;
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        {/* Form */}
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">
              Thêm Công Việc
                <span 
                className="fa fa-times-circle text-right"
                onClick={this.onCloseForm}
                ></span>
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit} >
              <div className="form-group">
                <label>Tên: </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Trạng Thái: </label>
                <select
                  name="status"
                  className="form-control"
                  value={status}
                  onChange={this.onChange}
                >
                  <option value={false}>Kích Hoạt</option>
                  <option value={true}>Ẩn</option>
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
