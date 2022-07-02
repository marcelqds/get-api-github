import React from 'react';
import { api } from './services';
import { ResetCSS } from './global/resetCSS';
import { Layout, Profile, Repository} from './components';
import { GithubProvider, useGithub } from './provider/github-provider';

const App = () => {

    return (
        <GithubProvider>
            <main>
                <ResetCSS />    
                <Layout>
                    <Profile />
                    <Repository />
                </Layout>
            </main>
        </GithubProvider>
    );
}

export { App }
