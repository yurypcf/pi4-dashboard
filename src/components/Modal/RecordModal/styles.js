import Modal from 'styled-react-modal';
import styled from 'styled-components';

export const StyledModal = Modal.styled`
  width: 35rem;
  height: 28rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 8px 24px;
  border-radius: 5px;
`
export const RecordImgCentered = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 10px auto;
  text-align: center;
  border-radius: 5px;
`;

export const ModalRecordContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
  max-width: 34rem;
  flex-direction: column;
  align-items: center;
  align-content: center;
  border: 2px solid #DCDCDC;
  border-radius: 5px;
`;

export const ModalUserContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 34rem;
  align-items: left;
  align-content: center;
  border: 2px solid #DCDCDC;
  border-radius: 5px;
`;

export const UserImg = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 10px;
  text-align: left;
  border-radius: 5px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  width: 100%;
`;

export const UserName = styled.h1`
  text-align: center;
  font-weight: 600;
  color: '#000';
  font-size: 2em;
`;

export const UserTrades = styled.p`
  text-align: center;
  font-weight: 600;
  color: '#000';
  font-size: 1em;
`;
