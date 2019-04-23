import styled from "styled-components";
import media from '../../../styles/media';

export const RecordsContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    max-width: 960px;
    margin: 0 auto;
    background-color: #D7D7D7;
    border-radius: 5px;
    border: 2px solid #D7D7D7;
    margin-top: 14px;
    ${media.phone`
        margin: 16px 10px;
    `}
`;

export const RecordsHeader = styled.p`
    font-size: 2em;
    text-align: center;
    font-weight: 600;
    i {
        margin: 10px;
    }
`;

export const RecordsBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
`;
