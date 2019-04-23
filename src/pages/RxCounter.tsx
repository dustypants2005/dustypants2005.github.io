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
        <h2><strong>Redux Counter</strong></h2>
        <hr />
        <div className='row'>
          Count: <h2 className='px-3'><strong>{ this.props.RxCounter }</strong></h2>
        </div>
        <div className='btn-group row'>
          <button className='btn btn-info' onClick={ () => this.OnIncrement() }><i className='fas fa-plus fa-2x'/></button>
          <button className='btn btn-info' onClick={ () => this.OnDecrement() }><i className='fas fa-minus fa-2x'/></button>
          <button className='btn btn-primary' onClick={ () => this.OnSave() }><i className='far fa-save fa-2x'/></button>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RxCounter)