import React from 'react'
import cookieUtils from '../utils/cookies'
import '../styles/candidateInfoForm.css'

class CandidateInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        lastName: '',
        id: '',
        birthday: '',
        email: '',
        githubUser: ''
      };
  }

  handleFormChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }

  handleFormSubmit = (event) => {  
    event.preventDefault();
    cookieUtils.create('candidateInfo',this.state);
    this.props.updateHasCookieState(true);
    this.props.getRepos(this.state.githubUser);
  }

  maxDate = () => {
    return new Date().toISOString().split('T').shift()
  }

  render() {
    return (
      <form className="candidate-info-form" onSubmit={this.handleFormSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} id="name" onChange={this.handleFormChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={this.state.lastName} id="lastName" onChange={this.handleFormChange} />
        </label>
        <label>
          Birthday:
          <input type="date" value={this.state.birthday} id="birthday" max={this.maxDate()} onChange={this.handleFormChange} />
        </label>
        <label>
          Id:
          <input type="number" value={this.state.id} id="id" onChange={this.handleFormChange} />
        </label>
        <label>
          Email:
          <input type="email" value={this.state.email} id="email" onChange={this.handleFormChange} />
        </label>
        <label>
          Github User:
          <input type="text" value={this.state.githubUser} id="githubUser" onChange={this.handleFormChange} required/>
        </label>
        <input className="get-info-button" type="submit" value="Get Github info"/>
      </form>
    );
  }
}

export default CandidateInfoForm
