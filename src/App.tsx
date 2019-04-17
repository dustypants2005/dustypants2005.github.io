import React, { Component } from 'react';
import './App.css';
import Navbar from './common/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Counter from './pages/Counter';
import RxCounter from './pages/RxCounter';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route path='/counter' component={Counter} />
          <Route path='/rxcounter' component={RxCounter} />
        </div>
      </Router>
    );
  }
}

export default App;
