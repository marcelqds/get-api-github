import React, { useState } from 'react';
import { Container } from './styles';
import { useGithub } from '../../provider/github-provider';
import { Loading } from '../Loading';

const Header = () => {
    const { getUser, isLoading } = useGithub();
     
    const [ username, setUsername ] = useState("");

    const handleSubmit = () => {        
        if(isLoading)return;
        console.log("Varios cliques");
        const nameSearch = username.trim();
        if(nameSearch.length == 0){
            alert('Informe um nome válido');
            return;
        }
        getUser(nameSearch);
    }
    
    return(
    <Container isLoading={isLoading}>
       <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Digite o username para pesquisa..." /><button disabled={isLoading} onClick={handleSubmit} >{isLoading ? <Loading /> : 'Buscar' }</button>
    </Container>
    );
}

export { Header };
