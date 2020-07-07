import React from 'react'
import cookieUtils from '../utils/cookies'
import '../styles/candidateInfo.css'

class CandidateInfo extends React.Component {
    
  readCandidateInfoFromCookie(){
    const cookieData = cookieUtils.get();
    return (
      <div className="candidate-info-container">
        <div className="info-wrapper">
          <h3>Name:</h3>
          <p>{cookieData.name}</p>
        </div>
        <div className="info-wrapper">
          <h3>Last Name:</h3>
          <p>{cookieData.lastName}</p>
        </div>
        <div className="info-wrapper">
          <h3>Id:</h3>
          <p>{cookieData.id}</p>
        </div>
        <div className="info-wrapper">
          <h3>Birthday:</h3>
          <p>{cookieData.birthday}</p>
        </div>
        <div className="info-wrapper">
          <h3>Email:</h3>
          <p>{cookieData.email}</p>
        </div>
        <div className="info-wrapper">
          <h3>GitHub User:</h3>
          <p>{cookieData.githubUser}</p>
        </div>
      </div> 
    )
  }
  render() {
    return (
      <React.Fragment>
          {this.readCandidateInfoFromCookie()}
      </React.Fragment>
    );
  }
}

export default CandidateInfo
