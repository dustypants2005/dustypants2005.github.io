import React, { Component, Dispatch, ChangeEvent, KeyboardEvent } from 'react'
import { connect } from 'react-redux';
import iState from '../types/iState';
import { CreateTodo, DeleteTodo, GetAllTodos, ToggleTodo, SaveTodos, LoadTodos } from '../actions/TodoAction';
import iTodo from '../types/iTodo';

interface iDispatch {
  onCreateTodo: Function,
  onDeleteTodo: Function,
  onGetAllTodos: Function,
  onToggleTodo: Function,
  onSaveTodos: Function,
  onLoadTodos: Function
}

const mapStateToProps = (state: iState) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onCreateTodo: (text: string) => dispatch(CreateTodo(text)),
    onDeleteTodo: (id: number) => dispatch(DeleteTodo(id)),
    onGetAllTodos: () => dispatch(GetAllTodos()),
    onToggleTodo: (id: number) => dispatch(ToggleTodo(id)),
    onSaveTodos: (todos: iTodo[]) => dispatch(SaveTodos(todos)),
    onLoadTodos: () => dispatch(LoadTodos())
  }
}

type Props = iState & iDispatch

class TodoPage extends Component<Props,any> {
  constructor(props: Props){
    super(props)
    this.OnCreate = this.props.onCreateTodo.bind(this)
    this.OnDelete = this.props.onDeleteTodo.bind(this)
    this.OnGetAll = this.props.onGetAllTodos.bind(this)
    this.OnToggle = this.props.onToggleTodo.bind(this)
    this.ValidateInput = this.ValidateInput.bind(this)
    this.HandleTextChange = this.HandleTextChange.bind(this)
    this.OnSave = this.props.onSaveTodos.bind(this)
    this.OnLoad = this.props.onLoadTodos.bind(this)
    this.onKeypress = this.onKeypress.bind(this)

    this.OnLoad()
  }

  OnCreate: Function
  OnDelete: Function
  OnGetAll: Function
  OnToggle: Function
  OnSave: Function
  OnLoad: Function

  TodoText: string = ''
  TextInput: HTMLInputElement | null = null

  componentWillUnmount(){
    this.OnSave(this.props.Todos)
  }

  onKeypress = (e: KeyboardEvent) => {
    if(e.keyCode === 13){
      this.ValidateInput()
    }
  }

  ValidateInput = () => {
    if(this.TodoText !== '' && this.TodoText !== null) {
      this.OnCreate(this.TodoText)
      this.TodoText = ''
      let t = document.getElementById('todoText') as HTMLInputElement
      t.value = ''
      t.focus()
    }
  }

  HandleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    this.TodoText = e.target.value
  }

  render() {
    return (
      <div>
        <h2><strong>Todo</strong></h2>
        <div>
          <input type='submit' id='todoSubmit' className='btn btn-success mx-2' value='+' onClick={this.ValidateInput}/>
          <input type='text' id='todoText' onChange={this.HandleTextChange} placeholder='Todo...' autoFocus onKeyDown={this.onKeypress}/>
          <button className='btn btn-light' onClick={() => this.OnSave(this.props.Todos)}><i className='far fa-save fa-2x'/></button>
        </div>
        <ul className='px-0 py-2'>
          {this.props.Todos.map((todo, i) => {
        return <li
        key={i}
        className='row mx-1'
        style={{ textDecoration: todo.IsCompleted ? 'line-through' : 'none'}}
        >
          <button className='btn btn-danger btn-sm mx-2'  onClick={() => this.OnDelete(i)}><i className='fas fa-trash-alt'/></button>
          <div onClick={() => this.OnToggle(i)} >{todo.Text}</div>
        </li>
      })}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage)