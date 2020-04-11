import React, { Component } from 'react'
import TaskSearch from './TaskSearch';
import TaskSort from './TaskSort';

export class Control extends Component {
  render() {
    return (
      <div className="row">
        {/* Search */}
        <TaskSearch 
          onSearch={this.props.onSearch}
        />
        {/* Sort */}
        <TaskSort />
      </div>
    )
  }
}

export default Control;
