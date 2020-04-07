import React, { Component } from 'react'

export class Sort extends Component {
    render() {
        return (
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
        )
    }
}

export default Sort
