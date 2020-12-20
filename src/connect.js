

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'

const StoreContext = React.createContext(null)

export function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrapComponent) {
      class ConnectComponent extends Component {
        constructor(props) {
          super(props)
          this.state = {
            props: {}
          }
        }
  
        componentDidMount() {
          const { store } = this.context
          store.subscribe(() => this.update())
          this.update()
        }
  
        update() {
          const { store } = this.context
          let stateToProps = mapStateToProps(store.getState())
          let dispatchToProps
          if (typeof mapDispatchToProps === 'function') {
            dispatchToProps = mapDispatchToProps(store.dispatch)
          } else {
            // 传递了一个 actionCreator 对象过来
            dispatchToProps = bindActionCreators(mapDispatchToProps, store.dispatch)
          }
  
          this.setState({
            props: {
              ...this.state.props,
              ...stateToProps,
              ...dispatchToProps,
            },
          })
        }
  
        render() {
          return <WrapComponent {...this.state.props} />
        }
      }
      
      return () => (
        <StoreContext.Consumer>
          {value => <ConnectComponent store={value} />}
        </StoreContext.Consumer>
      )
    }
  }