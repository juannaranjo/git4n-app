import React from 'react'
import cookieUtils from '../utils/cookies'
import '../styles/candidateInfo.css'

class CandidateInfo extends React.Component {
    
  readCandidateInfoFromCookie = () => {
    const cookieData = cookieUtils.get();
    const userData = [
      {
        field: 'Name:',
        value: cookieData.name
      },
      {
        field: 'Last Name:',
        value: cookieData.lastName
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
        value: cookieData.githubUser
      },
    ]
    return userData
  }

  deleteCookie = () => {
    cookieUtils.delete('candidateInfo')
    this.props.updateHasCookieState(false)
  }

  renderField(item) {
    return  (
      <div className="info-wrapper" key={item.field}>
        <h3>{item.field}</h3>
        <p>{item.value}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="candidate-info-component">
        <div className="candidate-info-container">
          {
            this.readCandidateInfoFromCookie().map(this.renderField)
          }
        </div>
        <button className="new-search-button" onClick={this.deleteCookie}>New Search</button>
      </div>
    );
  }
}

export default CandidateInfo
