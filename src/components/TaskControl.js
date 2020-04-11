import React, { Component } from 'react'
import TaskControlSearch from './TaskControlSearch';
import TaskControlSort from './TaskControlSort';

export class Control extends Component {
  render() {
    return (
      <div className="row">
        {/* Search */}
        <TaskControlSearch 
          onSearch={this.props.onSearch}
        />
        {/* Sort */}
        <TaskControlSort />
      </div>
    )
  }
}

export default Control;
