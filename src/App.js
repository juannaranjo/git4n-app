import React from 'react';
import CandidateInfoForm from './components/candidateInfoForm'
import './App.css';

function App() {
  return (
    <div className="App-git4n">
      <header className="git4n-header">
        <div className="git4n-header-logo">
          <img src="https://www.s4n.co/logo.svg" alt="s4n-logo"/>
          <h2> Git4n App </h2>
        </div>
        <p> This app allows you to search the public github repos that a person has </p>
      </header>
      <main>
        <CandidateInfoForm/>
      </main>
    </div>
  );
}

export default App;
