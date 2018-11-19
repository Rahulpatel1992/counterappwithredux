import React, {Component} from 'react'
import {connect} from 'react-redux'
import { increment, decrement } from '../action';

class Counter extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
                <button onClick = {this.props.increment}>Increment</button>
                <button onClick ={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return ({
      increment() {
      dispatch({type: "increment"});
      console.log(increment)
      },
      decrement() {
      dispatch({type: "decrement"});
      console.log(decrement)
      }
    })
  };
  
  const mapStateToProps = (state) => {
    return {
        count:state.counter_reducer.count
    }
  };
  
export default connect(mapStateToProps, mapDispatchToProps) (Counter);