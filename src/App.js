import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1> <hr />
        </div>

        <div className="row">
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

          <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            {/* Search - Sort */}
            <div className="row">
              {/* Search */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-15">
                <div className="input-group">
                  <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeholder="Nhập từ khóa ..."
                  />
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-primary">
                      <span className="fa fa-search mr-5"></span>Tìm
                    </button>
                  </span>
                </div>
              </div>
              {/* Sort */}
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mt-15">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    Sắp Xếp<span className="fa fa-caret-square-o-down ml-5"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a role="button" className="sort-selected" href="/">
                        <span className="fa fa-sort-alpha-asc pr-5">
                          Tên A-Z
                        </span>
                      </a>
                    </li>
                    <li>
                      <a role="button" className="sort-selected" href="/">
                        <span className="fa fa-sort-alpha-desc pr-5">
                          Tên Z-A
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* List */}
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                    <tr>
                      <td>1</td>
                      <td>Học React JS</td>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App;
