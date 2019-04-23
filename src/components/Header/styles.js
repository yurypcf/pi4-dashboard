import styled from 'styled-components';
import media from '../../styles/media';

export const HeaderMenu = styled.div`
    /* Flex Properties */
    background-image: linear-gradient(to bottom right, #FFDD72, #DDAA3F);
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    min-height: 60px;
`;

export const HeaderLogo = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 8px;
    cursor: pointer;
    width: 50%;
    i {
        margin: 8px;
        color: #EEE;
    }
    a {
        text-decoration: none;
        color: #545454;
    }
`;

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 20%;
    i {
        color: #EEE;
        font-size: 2em;
        cursor: pointer;
    }
    i:hover {
        transition: 0.2s ease-in-out;
        transform: scale(1.1);
    }
    ${media.phone`
        width: 40%;
        margin: 0 8px;
    `}
`;

export const LogOffButton = styled.button`
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    background: #000;
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 5%;
    cursor: pointer;

    :hover {
        color: #222222;
        background: #fff;
    }
    ${media.phone`
        width: 10%;
        margin: 0 8px;
    `}
`
