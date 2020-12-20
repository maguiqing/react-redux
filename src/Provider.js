import React,{Component} from "react";
import ReduxContext from "./context";

export default class Provider extends Component {
  
  constructor(props) {
    super(props)
  }
  render(){
    console.log(11, this.props.store)
    return (
      <ReduxContext.Provider value={this.props.store }>
        {this.props.children}
      </ReduxContext.Provider>
    )
  }
}