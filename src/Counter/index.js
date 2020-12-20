import React from "react";
import { connect } from "react-redux";
import ReactContext from '../context'
// import {connect} from "../connect.js";
import { increase, decrease } from "../models/counter/action.js";

class Counter extends React.Component {
  render() {
    const { count, increase, decrease } = this.props;
    // console.log('props', this.props)
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
    return {
      count: state.counter.count,
    }
}
const mapDispatchToProps =  dispatch => ({
    increase: () => dispatch(increase(1)),
    decrease: () => dispatch(decrease(1))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);