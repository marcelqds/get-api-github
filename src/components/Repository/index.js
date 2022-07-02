import React, { useEffect, useState } from 'react';
import { RepositoryItem } from '../RepositoryItem';
import { useGithub } from '../../provider/github-provider';
import { 
    WrapperTabs, 
    WrapperTabList, 
    WrapperTab, 
    WrapperTabPanel 
    } from './styles';

const Repository = () => {
    const { repositories } = useGithub();
    const [resultsRepos, setResultsRepos] = useState([]);
    
    useEffect(() => {       
        setResultsRepos([...repositories]);
    },[repositories]); 
    
    return(
        <WrapperTabs
            selectedTabClassName='is-selected'
            selectedTabPanelClassName='is-selected'
        >
            <WrapperTabList>                
                <WrapperTab>Repositories</WrapperTab>
                <WrapperTab>Starred</WrapperTab>
            </WrapperTabList>
            <WrapperTabPanel >
            {resultsRepos.map(repository => {
        
                const {name, full_name, html_url} = repository;
                let generateKey = Math.ceil(Math.random() * 10000)+ "-" + Date.now();

                return (
                    <RepositoryItem key={`${name}-${generateKey}`} name={name} fullname={full_name} link={html_url} />
                );        
            })}
                
            </WrapperTabPanel>
            <WrapperTabPanel>PS</WrapperTabPanel>
        </WrapperTabs>
    );
}

export{ Repository }
