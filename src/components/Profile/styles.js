import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    height:auto;
`;

const WrapperInfoUser = styled.div`
    width: 100%;
    min-height: 240px;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        font-size: 3.2rem;
    }

    h4{
        font-size: 1.6rem;
    }
    
    span{
        font-size: 1.4rem;
    }
`;

const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;

    div{
        text-align: center;
        margin-right: 12px;
    }
`;

const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    h3{
        margin-right: 12px;
    }

    a{
        color: blue;
        font-weight: bold;
    }
`;

const WrapperImage = styled.img`
    border-radius: 50%;
    width: 240px;
    height: 240px;
    margin: 8px;
`;

export { 
    Wrapper,
    WrapperImage,
    WrapperInfoUser,
    WrapperUsername,    
    WrapperStatusCount
}
