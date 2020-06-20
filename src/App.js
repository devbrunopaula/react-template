import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/nav.component';
import { useSelector, useDispatch }  from 'react-redux'
import { increment } from './redux/actions'


function App() {
  
  const counter = useSelector( state => state.counter)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Bruno React Template 
        </h2>
        <p>Redux - Thunk - SCSS - React-icons - Axios</p>
        <p>Redux Counter State {counter}</p>
        <button onClick={ () => dispatch(increment())}>+</button>
      </header>
    </div>
  );
}

export default App;
