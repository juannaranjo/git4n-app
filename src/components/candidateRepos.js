import React from 'react'
import '../styles/candidateRepos.css'


class CandidateRepos extends React.Component {
  
  loadReposData = () => {
    const repos = this.props.candidateRepos
    if(Array.isArray(repos)){
      return repos.map( repo => {
        return (
          <tr key={repo.name}>
           <td>{repo.language}</td>
           <td>{repo.default_branch}</td>
           <td>{repo.svn_url}</td>
           <td>{repo.name}</td>
           <td>{repo.description}</td> 
          </tr>
        )
      })
    } else {
      return(
        <tr>
          <th colspan="5">No repos found for this user</th>
        </tr>
      )
    }
  }

  render() {
    return (
      <table className="candidate-repos-table">
        <thead>
          <tr>
            <th>Language</th>
            <th>Default Branch</th>
            <th>Url git</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.loadReposData()}
        </tbody> 
      </table>
    );
  }
}

export default CandidateRepos
