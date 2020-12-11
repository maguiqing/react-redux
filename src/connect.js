// import ReduxContext from './context'
// import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// export default function (mapStateToProps, mapDispatchToProps) {
//   return function (WrapperComponent) {
//     return class extends Component {
//       static contextType = ReduxContext
//       constructor(props, context) {
//         super(props);
//         // 通过mapStateToProps 返回包装后的state，这里可方便用户拿到想要的state，同时优化渲染的组件
//         this.state = mapStateToProps(context.store.getState())
//       }
//       componentDidMount() {
//           // 订阅更新视图
//         this.unSubscribe = this.context.store.subscribe(() => {
//           this.setState(mapStateToProps(this.context.store.getState()))
//         })
//       }
//       render() {
//         // 处理绑定的action
//         let actions = bindActionCreators(mapDispatchToProps,this.context.store.dispatch);
//         return <WrapperComponent {...this.state} {...actions} />
//       }
//       componentWillUnmount() {
//         // 注销订阅
//         this.unSubscribe()
//       }
//     }
//   }
// }
import React, { Component } from 'react'
import PropTypes from 'prop-types';
export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        constructor() {
            super();
            this.state = {
                allProps: {}
            };
        }
        // context 约束必须
        static contextTypes = {
            store: PropTypes.object
        };
        // 组件挂在前需要执行的操作
        componentWillMount() {
            const {store} = this.context; // 从上下文中获取 store 该 store 是从根组件传递过来的
            this._updateProps();// 初始化执行一次 updateProps
            store.subscribe(() => this._updateProps()); // 加入观察者
        }
        // 用于更新 props 
        _updateProps() {
            const {store} = this.context;
            let stateProps = mapStateToProps
                ? mapStateToProps(store.getState(), this.props)
                : {}; // 主要用来进行 store 的 state 的获取
            let dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {} // 用来 dispatch 的时候获取 store 的 dispatch
            // 整合普通的 props 和 从 state 生成的 props 
            // 作为完整的 state 返回，这样在子组件中就能够通过 props 获取内容
            this.setState({
                allProps: { 
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }
        render() {
            return <WrappedComponent {...this.state.allProps}/>
        }
    }
    // 返回高阶组件
    return Connect;
}