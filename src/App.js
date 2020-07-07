import React from 'react';
import CandidateInfoForm from './components/candidateInfoForm'
import CandidateInfo from './components/candidateInfo'
import cookieUtils from './utils/cookies'
import './styles/App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hasUserCookie: false    
    };
  }

  componentDidMount(){
    this.hasUserCookie()
  }
  
  hasUserCookie(){
    if(cookieUtils.get()){
      this.updateUserCookie(true);
    }else{
      this.updateUserCookie(false);
    }
  }

  updateUserCookie = (state) => {
    this.setState({hasUserCookie: state});
  }

  render(){
    return (
      <div className="App-git4n">
        <header className="git4n-header">
          <div className="git4n-header-logo">
            <img src="/img/logo.svg" alt="s4n-logo"/>
            <h2> Git4n App </h2>
          </div>
          <p> This app allows you to search the public github repos that a person has </p>
        </header>
        <main>
          {this.state.hasUserCookie && <CandidateInfo />}
          {!this.state.hasUserCookie && <CandidateInfoForm updateUserCookie={this.updateUserCookie}/>}
        </main>
      </div>
    );
  }
}

export default App;
