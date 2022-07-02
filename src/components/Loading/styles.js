import styled, { keyframes } from 'styled-components';


const spinLoading = keyframes`
    0%{ transform : rotate(0deg);}
    100%{transform: rotate(360deg);}
`;

const Spin = styled.div`
    width: 24px;
    height: 24px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid gray;
    border-radius: 50%;
    animation: ${spinLoading} .8s linear infinite;
`;

export { Spin }
