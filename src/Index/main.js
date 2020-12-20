import React, { Component } from 'react';
import Content from './content'
import PropTypes from 'prop-types'
  class Main extends Component {
    render () {
      return (
      <div>
        <h2>This is main</h2>
        <Content />
      </div>
      )
    }
  }
  export default Main