import React from 'react';
import { Record, RecordImg, RecordTyping, ButtonsContainer, RecordButton, RecordPrice } from './styles';

const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
});

const RecordItem = ({ imgPath, title, artist, genre, price }) => (
    <Record>
        <RecordImg src={imgPath}></RecordImg>
        <RecordTyping><h1>{title}</h1></RecordTyping>
        <RecordTyping>
            <p>{artist}</p>
            <p>{genre}</p>
        </RecordTyping>
        <RecordPrice>{intlMonetary.format(price)}</RecordPrice>
        <ButtonsContainer>
            <RecordButton cart={false}>Comprar</RecordButton>
            <RecordButton cart={true}>+ Carrinho</RecordButton>
        </ButtonsContainer>

    </Record>
)

export default RecordItem;
