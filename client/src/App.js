import React from 'react';
import './App.css';
import Home from "./Home";
import Companies from './Companies';
import About from './About';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import { Route, Link } from 'react-router-dom';


function App() {
   return (
    <div className="App">
     <div id="navbar">
     <ul>
     <li>
     <Link to="/" >Home</Link>
     </li>
     <li>
       <Link to="/about" >About</Link>
     </li>
    <li>
    <Link to="/companies" >Companies</Link>
    </li>
    <li>
    <Link to="/signin" >Sign In</Link>
    </li>
</ul>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/companies" component={Companies} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/signin" component={SignIn} />
    </div>
    
    
    </div>
   

  );
}

export default App; 
