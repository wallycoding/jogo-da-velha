import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    background-color: #000;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    overflow: hidden;
`;
export const Header = styled.header`
    display: flex;
    color: #fff;
    text-transform: uppercase;
    min-width: 390px;
    margin-bottom: 5px;
`;
export const Title = styled.span`
    display: flex;
    color: #fff;
`;
export const Description = styled.span`
    display: flex;
    color: #fff;
    font-size: 20px;
    margin-bottom: 20px;
`;
export const Button = styled.button`
    display: flex;
    width: ${props => props.width / 3}px;
    height: ${props => props.width / 3}px;
    background-color: #4b88eb;
    justify-content: center;
    align-items: center;
    ${props => {
        switch (props.index) {
            case 1:
            case 7:
                return 'border-right: solid 5px #1e65d9; border-left: solid 5px #1e65d9;'
            case 4:
                return 'border: solid 5px #1e65d9;'
            case 3:
            case 5:
                return 'border-bottom: solid 5px #1e65d9; border-top: solid 5px #1e65d9;'
            default:
                return '';
        }
    }};
`;
export const EndGame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #000000f2;
    flex-direction: column;
`;
export const ButtonRestart = styled.button`
    min-width: 300px;
    padding: 10px;
    background-color: #4b88eb;
    border: solid 5px #1e65d9;
    border-radius: 5px;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
`;