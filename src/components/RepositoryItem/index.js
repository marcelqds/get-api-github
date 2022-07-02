import React from 'react';
import {Container} from './styles';

const RepositoryItem = ({keys, name, fullname, link}) => {
    return(
        <div >
            <h2>{name}</h2>
            <h4>{fullname}</h4>
            <span>{link}</span>
        </div>
    );
}

export { RepositoryItem } 
