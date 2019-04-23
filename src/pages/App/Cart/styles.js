import styled from 'styled-components';

export const CartPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  align-content: center;
  margin: 0 auto;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 12px;
  align-items: center;
  align-content: center;
  border: 2px solid #DCDCDC;
  border-radius: 5px;
  max-width: 80rem;
`
export const CartHeader = styled.p`
  font-size: 2em;
  text-align: center;
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-weight: 600;
  color: #F6C358;
  i {
      margin: 10px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  width: 100%;
`;
