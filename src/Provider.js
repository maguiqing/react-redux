import React,{Component} from "react";
import ReduxContext from './context'
import PropTypes from 'prop-types'
export default class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  constructor(props) {
    super(props)
  }
  render(){
    return (
      <ReduxContext.Provider value={this.props.store }>
        {this.props.children}
      </ReduxContext.Provider>
    )
  }
}