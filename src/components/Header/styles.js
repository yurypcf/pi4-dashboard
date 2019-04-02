import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-image: linear-gradient(to bottom right, #FFDD72, #DDAA3F);
`;

export const HeaderMenu = styled.div`
    /* Flex Properties */
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;

    /* Regular Properties */
    max-width: 960px;
    height: 100px;
    max-height: 100px;
    margin: 0 auto;
    a {
        color: white;
    }
`;

export const HeaderLogo = styled.div`
    font-size: 2.25em;
    font-weight: bold;
    color: #222222;
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    margin: 0 10px;
    cursor: pointer;
    i {
        margin: 10px;
    }
    a {
        text-decoration: none;
        color: #222;
    }
`;

export const HeaderNav = styled.nav`
    /* Flex Properties */
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    /* Regular Properties */
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    a {
        font-size: 1.2em;
        font-weight: 600;
        display: block;
        padding: 0 15px 0 15px;
        text-decoration: none;
    }

    li:hover {
        transition: 0.2s ease-in-out;
        transform: scale(1.1);
    }
`;

export const LogOffButton = styled.button`
    color: #fff;
    font-size: 16px;
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    font-weight: 600;
    background: #222222;
    height: 40px;
    border: 0;
    border-radius: 5px;
    width: 8%;
    cursor: pointer;

    :hover {
        color: #222222;
        background: #fff;
    }
`