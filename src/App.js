import React from 'react';
 import './stylesheets/utils/main.scss'
 import Home from './components/Home'
 import Navbar from './components/NavBar/NavBar'
 import About from './components/About/About'
 import Contact from './components/Contact'
 import SignIn from './components/SignIn'
 import SignUp from './components/SignUp'
 import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="container">
   <Router> 
     <Navbar/>
    <Switch>
    <Route  exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/signin' component={SignIn}/>
    <Route path='/signup' component={SignUp}/>
    </Switch>


   </Router>
  
   
    </div>
  );
}

export default App;
