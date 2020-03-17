import React from 'react';
import './App.css'
import Header from './components/Header'
import Main from './components/MainComponent'
import Footer from './components/Footer'
import Greet from './components/Greet'
function App() {
  const firstname = "Raect"
  const lastname = "Js"
  const date = new Date()
  const hours = date.getHours()
  let timeofDay

  const styles={ 
    background: "	#808080"
  }

  if(hours < 12){
    timeofDay = "Morning"
    styles.color = "#FF0000"
  }else if(hours >= 12 && hours < 17){
    timeofDay = "Afternoon"
    styles.color = "#FFD700"
  }else{
    timeofDay = "Night"
    styles.color = "#000000"
  }

  return (
    <div>
      <Greet/>
      <h1>Hello {firstname + " " + lastname}</h1>
      <h1>Hello {firstname} {lastname}!</h1>

      Date function
      <h2>It is currently about {date.getHours() % 12+":"+date.getMinutes() % 60+":"+date.getSeconds() % 60} o'clock</h2>
      <Header />
      <Main />
      <Footer />
      <h1 style={styles}>Good {timeofDay}</h1>
    </div>
  );
}

export default App;
