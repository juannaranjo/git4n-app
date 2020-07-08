const baseURL = 'https://api.github.com/users/'

const getReposFromGithub = (candidate, params) => {
    return fetch(`${baseURL}${candidate}/repos?${params}`)
            .then(response => response.json())
            .catch( error => console.error(`${error.name}: ${error.message}`)) 
}

export default getReposFromGithub
