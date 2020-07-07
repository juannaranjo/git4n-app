import React from 'react'
import cookieUtils from '../utils/cookies'
import '../styles/candidateInfo.css'

class CandidateInfo extends React.Component {
    
  readCandidateInfoFromCookie(){
    const cookieData = cookieUtils.get();

    const userData = [
      {
        field: 'Name:',
        value: cookieUtils.name
      },
      {
        field: 'Last Name:',
        value: cookieUtils.lastName
      },
      {
        field: 'Id:',
        value: cookieData.id
      },
      {
        field: 'Birthday:',
        value: cookieData.birthday
      },
      {
        field: 'Email:',
        value: cookieData.email
      },
      {
        field: 'GitHub User:',
        value: cookieUtils.githubUser
      },
    ]
    return userData
  }
  render() {
    return (
      <div className="candidate-info-container">
        {
          this.readCandidateInfoFromCookie().map(item => {
            return (
              <div className="info-wrapper">
                <h3>{item.field}</h3>
                <p>{item.value}</p>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CandidateInfo
