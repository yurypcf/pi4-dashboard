import Modal from 'styled-react-modal';
import styled from 'styled-components';
import media from '../../../styles/media';

export const StyledModal = Modal.styled`
  width: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 8px 24px;
  margin: 10px;
  border-radius: 5px;
`
export const RecordImg = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 10px;
  text-align: center;
  border-radius: 5px;
  ${media.phone`
      margin: 10px auto;
  `}
`;

export const RecordContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
`

export const ModalRecordContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
  max-width: 34rem;
  border: 2px solid #DCDCDC;
  justify-content: space-between;
  border-radius: 5px;
  ${media.phone`
      flex-direction: column;
  `};
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

export const PlaylistContainer = styled.div`
  display: flex;
  width: 100%;
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
  width: 100%;
`;

export const UserName = styled.h1`
  text-align: center;
  font-weight: 600;
  color: '#000';
  font-size: 2em;
  margin: 10px;
  ${media.phone`
    font-size: 1.2em;
  `}
`;

export const UserTrades = styled.p`
  text-align: center;
  font-weight: 600;
  color: '#000';
  font-size: 1em;
  margin-top: 16px;
  ${media.phone`
    margin-top: 10px;
  `}
`;
