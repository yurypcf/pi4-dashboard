import React from 'react';
import {ModalProvider} from 'styled-react-modal';
import {
  StyledModal,
} from './styles';

const CheckoutModal = ({ trackingCode, isOpen, onRequestClose, paymentMethod}) => (
  <ModalProvider>
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={onRequestClose}
      onEscapeKeydown={onRequestClose}
    >
    {paymentMethod === 'billet' ?
    <div>
    <h1>Parabéns, sua compra foi efetuada!<br/> Código de Identificação: {trackingCode}<br/> Imprima o boleto por <a href="">aqui</a>.</h1>
    </div> : <div>
      <h1>Insira o cartão de crédito:</h1>
    </div>
    }
    </StyledModal>
  </ModalProvider>
);

export default CheckoutModal;
