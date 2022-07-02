import React from 'react';
import { WrapperLayout } from './styles';
import { Header } from '../Header';
import { useGithub } from '../../provider/github-provider';

const Layout = ({children}) => {
    const { isLoading, hasUser } = useGithub();

    let render;
    if(isLoading == false && hasUser == false) render = <div>Informe um usuário válido</div>;
    else render = isLoading ? <div>Loading</div> : children;

    return(
        <WrapperLayout>
            <Header />
            {render}
        </WrapperLayout>
    );
}

export { Layout }
