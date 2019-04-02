import styled from "styled-components";

export const RecordsContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    max-width: 960px;
    margin: 0 auto;
    padding: 10px;
`;

export const RecordsHeader = styled.p`
    font-size: 2em;
    text-align: center;
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    font-weight: 600;
    color: #F6C358;
    i {
        margin: 10px;
    }
`;

export const RecordsBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    max-width: 960px;
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    font-weight: 600;
`;