import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Greet from './Component/Greet'
// import Welcome from './Component/Welcome'
// import Hello from './Component/Hello'
// import Message from './Component/Message'
// import Counter from './Component/Counter'
import Home from './Component/home'
import About from './Component/about'
import Services from './Component/services'
import Navbar from './Component/navbar'
class App extends Component {
  render(){
  return (
    <div className="App">
      <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route path='/about' component={ About }/>
                <Route path='/services' component={ Services }/>
            </Switch>
        </BrowserRouter>
      {/* <Counter/>
      <Message />
      <Greet name='React'surName='JS'>
        <p>This is children props</p>
      </Greet>
      <Greet name='React' surName='Native'>
        <button>Action</button>
      </Greet>
      <Greet name='Java' surName='script'/>
      <Welcome name='HTML'/>
      <Welcome name='CSS'/>
      <Hello /> */}
    </div>
  );
}
}
export default App;