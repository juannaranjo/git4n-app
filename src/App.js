import React from 'react';
import CandidateInfoForm from './components/candidateInfoForm'
import CandidateInfo from './components/candidateInfo'
import CandidateRepos from './components/candidateRepos'
import cookieUtils from './utils/cookies'
import getReposFromGithub from './utils/api'
import './styles/normalize.css'
import './styles/App.css'


class App extends React.Component {
  state = {
      hasUserCookie: false,
      candidateRepos: []    
  };


  componentDidMount(){
    this.hasUserCookie()
  }
  
  hasUserCookie(){
    if(cookieUtils.get()){
      this.updateHasCookieState(true);
      this.getRepos(cookieUtils.get().githubUser)
    }else{
      this.updateHasCookieState(false);
    }
  }

  updateHasCookieState = (state) => {
    this.setState({hasUserCookie: state});
  }

  getRepos = async (githubUser) => {
    const repos = await getReposFromGithub(githubUser,'')
    console.log('repos', repos)
    this.setState({candidateRepos: repos});
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
          {this.state.hasUserCookie ? 
            <>
            <CandidateInfo  updateHasCookieState={this.updateHasCookieState}/>
            <CandidateRepos candidateRepos={this.state.candidateRepos}/>
            </> 
            :
            <CandidateInfoForm 
              updateHasCookieState={this.updateHasCookieState} 
              getRepos={this.getRepos}/>
          }
        </main>
      </div>
    );
  }
}

export default App;
