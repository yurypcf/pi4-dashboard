import styled from 'styled-components';

// PAGE STRUCTURE

export const CartPage = styled.div`
  display: flex;
  width: 100%;
`;

export const OverviewContainer = styled.div`
  background-color: #D7D7D7;
  margin: 10px;
  flex: 1.5;
  height: auto;
`;

export const AddressContainer = styled.div`
  background-color: #D7D7D7;
  margin: 10px;
  padding: 12px;
  flex: 1.5;
`;

export const RecordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #D7D7D7;
  margin: 10px;
  flex: 1.5;
  height: auto;
  padding: 12px;
`;

export const PaymentContainer = styled.div`
  background-color: #D7D7D7;
  width: 100%;
  margin: 10px;
  flex: 1;
  height: auto;
  padding: 16px;
`;

// PAGE ELEMENTS

// ------------------------------------ //
/* Overview Container */
// ------------------------------------ //
export const RecordCard = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  margin: 8px;
`;

export const RemoveCard = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    width: 100%;
    i {
        cursor: pointer;
        color: #777777;
        margin: 10px
    }
    i:hover {
        cursor: pointer;
        color: #F6C358;
    }
`;

export const RecordImg = styled.img`
  margin: 6px;
  width: 60px;
  height: 70px;
  flex: 1;
`;

export const RecordInfo = styled.div`
  margin: 10px;
  color: black;
  flex: 6;
`;

export const RecordQuantity = styled.div`
  display: flex;
  align-items: center;
  color: black;
  flex: 1;
  text-align: center;
`;


// ------------------------------------ //
/* Address Container */
// ------------------------------------ //

export const CalculateButton = styled.button`
    color: #434343;
    background-color: white;
    font-size: 1em;
    font-weight: 600;
    height: 30px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    margin: 8px;
`

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: white;
  border: none;
  border-radius: 3px;
`;


// ------------------------------------ //
/* Payment Container */
// ------------------------------------ //

export const FinishButton = styled.button`
    color: #fff;
    background-color: ${props => props.cart ? '#F6C358' : '#4BB543'}
    font-size: 1em;
    font-weight: 600;
    width: 100%;
    height: 38px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
`

export const Radio = styled.input.attrs({ type: 'radio' })`
`

export const PaymentMethodArea = styled.div`
  padding: 16px 0;
`;

export const PaymentInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const PaymentParagraph = styled.div`
    font-size: 1em;
    margin-bottom: 16px;
`;

export const PaymentTotal = styled.div`
    font-weight: 800;
    font-size: 2em;
    bottom: 0;
`;
