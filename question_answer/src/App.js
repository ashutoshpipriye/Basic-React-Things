import React from 'react';
import Joke from './Components/Joke'
import jokesData from './Components/jokesData'

function App() {
  const jokeComponent = jokesData.map(joke => <Joke key = {joke.id} question={joke.question} answer={joke.answer}/>)
  return (
    <div>
      {jokeComponent}
      {/* <Question
        question="Syntax of print in python?"
        answer="print(Hello)"
      />

      <Question
        question="Syntax of print in php?"
        answer="echo "
      /> */}
    </div>
  );
}

export default App;
