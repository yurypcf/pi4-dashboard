import React from 'react';
import {ModalProvider} from 'styled-react-modal';
import {
  StyledModal,
  ModalRecordContainer,
  ModalUserContainer,
  UserImg,
  UserInfoContainer,
  UserTrades,
  UserName,
  RecordImgCentered
} from './styles';
import {RecordTyping, RecordPrice} from '../../RecordItem/styles';

const intlMonetary = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2
});

const RecordModal = ({isOpen, onRequestClose, imgPath, title, artist, genre, price}) => (
  <ModalProvider>
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={onRequestClose}
      onEscapeKeydown={onRequestClose}
    >
      <ModalRecordContainer>
        <RecordImgCentered src={imgPath}></RecordImgCentered>
        <RecordTyping modal={true}><h1>{title}</h1></RecordTyping>
        <RecordTyping modal={true}>
          <p>{artist}</p>
          <p>{genre}</p>
        </RecordTyping>
        <RecordPrice modal={true}>{intlMonetary.format(price)}</RecordPrice>
      </ModalRecordContainer>
      <ModalUserContainer>
        <UserImg src={imgPath}></UserImg>
        <UserInfoContainer>
          <div>
            <UserName>Yury</UserName>
          </div>
          <div>
            <UserTrades>Negociações finalizadas: 50</UserTrades>
          </div>
        </UserInfoContainer>
      </ModalUserContainer>
    </StyledModal>
  </ModalProvider>
);

export default RecordModal;
