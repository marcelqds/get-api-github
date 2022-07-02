import React, { 
    createContext, 
    useState, 
    useContext, 
    useEffect, 
    useCallback 
    } from 'react';

import { api } from '../services';

const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: []
});

const GithubProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hasUser, setHasUser] = useState(false);
    const [repositories, setRepositories] = useState([]);
    
    const [githubState, setGithubState] = useState({

        user: {
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            locationa: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [{name:"Teste App", fullname:"Fullname", link:"teste/teste-app"}],
        starred: [],
    });
    
    const contextValue = {
       user : githubState.user,
       repositories : repositories,
       starred: githubState.starred,setGithubState,
       getUser: useCallback((username) => getUser(username),[]),
       getUserRepos: useCallback((username,userData) => getUserRepos(username,userData),[]),       
       isLoading : isLoading,
       hasUser : hasUser,
    }

    const getUserRepos = useCallback((username) => {
        api.get(`/users/${username}/repos`).then(({data}) => {
            console.log("Estamos,aqui",data);
            setRepositories([...data]);
        }).catch(e => {
            console.log('Não foi possível trazer repositórios');
        });
    },[]);

    const getUser = (username) => {
        setIsLoading(true);
        api.get(`/users/${username}`).then( ({data}) =>{            
            setGithubState({...githubState,user:{...data}});
            if(data.public_repos > 0)
                getUserRepos(username);
            else setRepositories([]);
            setHasUser(true);
            
        }).catch(e => {
            setHasUser(false);
            console.log(e.message);
        }).finally(()=>{
            console.log('Passando pelo finally');
            setIsLoading(false);
        });
    }    

    //https://github.com/ASDADFAS

    return <GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>
}

const useGithub = () => useContext(GithubContext);

export { GithubProvider, GithubContext, useGithub }

