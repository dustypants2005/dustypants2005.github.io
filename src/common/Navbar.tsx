import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <Link to='/' className='navbar-brand nav-link'>Home</Link>
        <ul className='nav navbar-nav'>
          <li className='nav-item'>
            <Link to='Counter' className='nav-link'>Counter</Link>
          </li>
          <li className='nav-item'>
            <Link to='RxCounter' className='nav-link'>RxCounter</Link>
          </li>
        </ul>
      </nav>
    )
  }
}
