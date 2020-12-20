import React, { Component } from 'react';
import Header from './head'
import Main from './main'
import PropTypes from 'prop-types'
class Index extends Component {
    static childContextTypes = {
      themeColor: PropTypes.string
    }
    constructor () {
      super()
      this.state = { themeColor: 'red' }
    }
    componentWillMount () {
        // this.setState({ themeColor: 'green' })
    }
    getChildContext () {
      return { themeColor: this.state.themeColor }
    }
    render () {
      return (
        <div>
          <Header />
          <Main />
        </div>
      )
    }
  }
  export default Index