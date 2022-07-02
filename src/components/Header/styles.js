import styled from 'styled-components';

const Container = styled.header`
    width: 100%;
    display: flex;
    margin-bottom: 16px;
    
    input{
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #cccccc33;
        padding: 8px;
        font-size: 1.6rem;
        font-color: #555;

        &:focus{
            border: 1px solid #eee;
            outline: none;
        }

        &::placeholder{
            font-size: 1.6rem;
        }
    }
    
    button{
        background-color: ${props => props.isLoading ? "#ccc" : "#25ed899"};
        min-width: 76px;
        min-height: 24px;
        color: white;
        /*padding: 8px 16px;*/
        margin: 0 8px;
        border-radius: 8px;
        border: none;
        font-weight: bold;
        font-size: 1.4rem;
        transition: .4s;
        display: flex;
        justify-content: center;
        align-items: center;
        &:focus{
            outline: none;
            background-color: ${props => props.isLoading ? "#ccc" : "#225ed9"};
            color: white;
        }

        &:hover{
            background-color: ${props => props.isLoading ? "#ccc" : "#225ed9"};
            color: white;
        }
    }
`;

export { Container };
