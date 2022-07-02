import React from 'react';
import { useGithub } from '../../provider/github-provider';

import { 
    Wrapper,
    WrapperImage,
    WrapperInfoUser, 
    WrapperUsername, WrapperStatusCount 
    } from './styles';


const Profile = () => {    
    const { user } = useGithub();
    console.log(user);

    return(
       <Wrapper>
            <WrapperImage src={`${user.html_url}.png`} alt="Avatar of user"/>
            <WrapperInfoUser>
                    <div>
                    <h1>{user.name}</h1>
                    <WrapperUsername>
                        <h3>Username: </h3> 
                        <a href={user.html_url} rel="noreferrer">{user.login}</a>
                    </WrapperUsername>
                    </div>
                <WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>{user.followers}</span>
                </div>
                <div>
                    <h4>Following</h4>
                    <span>{user.following}</span>
                </div>
                <div>
                    <h4>Repos</h4>
                    <span>{user.public_repos}</span>
                </div>

                <div>
                    <h4>Gists</h4>
                    <span>{user.public_gists}</span>
                </div>

                </WrapperStatusCount>
            </WrapperInfoUser>
       </Wrapper> 
    );
}

export { Profile } 
