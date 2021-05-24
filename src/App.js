import React from 'react'
import { Link, Route } from 'react-router-dom'
import HomeBased from "./Channel/HomeBased.js"
import Home from "./Channel/Home.js"
import About from "./Channel/About.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="prime">
          <Link to="/Youtube">YouTube</Link> 
        </div>
      <header className="App-header">
        
        <Route exact path="/Youtube">
          <header className ="links">
              <Link to="/">YouTube</Link>
              <Link to='/home'>Home</Link>
              <Link to='/about'>About</Link>
          </header>
        </Route>
        <Route exact path= "/home">
          <header className ="links">
              <Link to="/">YouTube</Link>
              <Link to='/home'>Home</Link>
              <Link to='/about'>About</Link>
          </header>
        </Route>
        <Route exact path= "/about">
          <header className ="links">
              <Link to="/">YouTube</Link>
              <Link to='/home'>Home</Link>
              <Link to='/about'>About</Link>
          </header>
        </Route>
        <div className='homebased'>
              <Route exact path="/" component={HomeBased}/>
              <Route path="/home" component={Home}/>
              <Route path="/about" component={About}/>
        </div>
        {/* <div className="prime">
          <Link to="/Youtube">YouTube</Link> 
        </div> */}
      </header>      
    </div>

  );
}

export default App;
