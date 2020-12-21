

import React, { Component } from 'react'
import ReduxContext from './context'

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
          const { store } = this.props
          store.subscribe(() => this.update())
          this.update()
        }
  
        update() {
          const { store } = this.props
          let stateToProps = mapStateToProps(store.getState())
          let dispatchToProps
          if (typeof mapDispatchToProps === 'function') {
            dispatchToProps = mapDispatchToProps(store.dispatch)
          } else {
            // 传递了一个 actionCreator 对象过来
            dispatchToProps = {}
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
        
        <ReduxContext.Consumer>
          {
          value => {
            return  <ConnectComponent store={value} />
          }
         }
        </ReduxContext.Consumer>
      )
    }
  }