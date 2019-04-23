import styled from 'styled-components';
import media from '../../styles/media';

export const Record = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 175px;
    margin: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
    border-radius: 5px;
    background-color: #a8a8a8;
    height: 450px;
    max-width: 220px;
    ${media.phone`
        height: 525px;
        max-width: 100% !important;
    `};
`;

export const ViewRecord = styled.div`
    display: flex;
    justify-content: flex-end;
    text-align: right;
    align-items: center;
    width: 100%;
    i {
        cursor: pointer;
        color: #777777;
        margin: 10px
    }
    i:hover {
        cursor: pointer;
        color: #fff;
    }
`


export const RecordImg = styled.img`
    width: 90%;
    margin: 10px auto;
    text-align: center;
    border-radius: 5px;
`;

export const RecordTyping = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: ${props => props.modal ? 'center' : 'left'}
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    font-weight: 400;
    margin: 0 14px;
    color: '#fff';
    h1 {
        font-size: 0.5em;
        color: #484848;
    }
    p {
        font-size: 0.6em;
        color: ${props => props.modal ? '#000' : '#fff'};
    }
    p:last-child {
        font-size: 0.4em;
    }
`;

export const RecordPrice = styled.h1`
    display: flex;
    color: #84d5f0;
    justify-content: flex-start;
    text-align: ${props => props.modal ? 'center' : 'left'}
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 1.4em;
    margin: 10px 14px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    margin-top: auto;
`

export const RecordButton = styled.button`
    color: #fff;
    background-color: ${props => props.cart ? '#F6C358' : '#4BB543'}
    font-size: 1em;
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    font-weight: 600;
    height: 30px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
`
