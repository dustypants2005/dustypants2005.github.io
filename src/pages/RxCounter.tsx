import React, { Component, Dispatch } from 'react'
import { connect } from 'react-redux';
import iState from '../types/iState';
import { increment, decrement, save, load } from '../actions/CounterAction';
import './RxCounter.css'

interface iDispatch {
  onIncrement: Function,
  onDecrement: Function,
  onSave: Function,
  onLoad: Function
}

// interface iCounter {
//   RxCounter: iState
// }

const mapStateToProps = (state: iState) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onSave: () => dispatch(save()),
    onLoad: () => dispatch(load())
  }
}

type Props = iState & iDispatch

class RxCounter extends Component<Props, any> {
  constructor(props: Props){
    super(props)
    this.OnIncrement = this.props.onIncrement.bind(this)
    this.OnDecrement = this.props.onDecrement.bind(this)
    this.OnSave = this.props.onSave.bind(this)
    this.props.onLoad();
  }
  OnIncrement: Function
  OnDecrement: Function
  OnSave: Function

  render() {
    return (
      <div>
        <h2>Redux Counter</h2>
        <hr />
        <div className='row'>
          Count: { this.props.RxCounter }
        </div>
        <div className='btn-group row'>
          <button className='btn btn-primary' onClick={ () => this.OnIncrement() }>+</button>
          <button className='btn btn-primary' onClick={ () => this.OnDecrement() }>-</button>
          <button className='btn btn-primary' onClick={ () => this.OnSave() }>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RxCounter)