import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import api from '../../../lib/api/index';
import cep from 'cep-promise';
import axios from 'axios';
import CheckoutModal from '../../../components/Modal/CheckoutModal/index'
import {
     CartPage,
     RecordsContainer,
     AddressContainer,
     OverviewContainer,
     PaymentContainer,
     RecordCard,
     RemoveCard,
     RecordImg,
     RecordInfo,
     CalculateButton,
     FinishButton,
     PaymentMethodArea,
     Radio,
     PaymentInfo,
     PaymentParagraph,
     PaymentTotal,
     Input
    }
from  './styles';

const intlMonetary = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2
});
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            paymentMethod: 'billet',
            recordsTotal: null,
            total: null,
            isModalOpen: false,
            trackingCode: null,
            address: {
               cep: null,
               city: null,
               neighborhood: null,
               state: null,
               street: null 
            }
        }
    }

    removeItem = (id) => {
        const { cart } = this.state
        let indexToRemove
        cart.map((ci, i) => {
            if(ci.id === id) {
                indexToRemove = i;
            }
        })
        if(indexToRemove !== -1) cart.splice(indexToRemove, 1)
        const recordTotalAmount = cart.reduce((acc, val) => acc + parseInt(val.price), 0);
        this.setState({ cart: cart, recordsTotal: recordTotalAmount, total: recordTotalAmount + 44 })
    }

    calculateShipping = async () => {
        const res = await cep(this.state.address.cep)
        this.setState({ address: res})
    }

    addressBlock = () => {
        const { address } = this.state
        return (
            <div>
                <h2>Endereço de Entrega:</h2>
                <br />
                <div>
                    <PaymentParagraph>{address.street}</PaymentParagraph>
                    <PaymentParagraph>{address.neighborhood}</PaymentParagraph>
                    <PaymentParagraph>{address.city}</PaymentParagraph>
                    <PaymentParagraph>{address.state}</PaymentParagraph>
                    <PaymentParagraph>Valor do Frete: R$ 44</PaymentParagraph>
                </div>
            </div>
        )
    }

    finishSale = async () => {
        this.openModal()
        const { total } = this.state
        const { cep } = this.state.address
        parseInt(cep)
        const shipping_value = 44
        const tracking_code =  Math.floor(Math.random() * 1000000000);
        this.setState({ trackingCode: tracking_code })
        //Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

        const data = this.state.cart.map(function(ci) {
            return {
                quantity: 1,
                unitary_value: ci.price,
                record_id: ci.id
            };
        })

        try {
            await api.post('/sales', { total, cep, shipping_value, tracking_code });
        } catch (err) {
            console.log(err)
        }
    }

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }

    openModal = () => {
        this.setState({ isModalOpen: true })
    }

    componentWillMount() {
        this.loadRecords()
    }

    loadRecords = async () => {
        try {
            const response = await api.get('/records');
            const recordTotalAmount = response.data.reduce((acc, val) => acc + parseInt(val.price), 0);
            this.setState({ cart: response.data, recordsTotal: recordTotalAmount, total: recordTotalAmount + 44 });
        } catch(err) {
            console.log(err);
        }
    }

    onChange = (event) => {
        this.setState({ address : { ...this.state.address, cep: event.target.value }});
    }

    handleOptionChange = event => {
        this.setState({ paymentMethod: event.target.value })
    }

    render() {
        const { cart, recordsTotal, total, isModalOpen, paymentMethod, address, trackingCode } = this.state;
        console.log(trackingCode)
        return (
            <CartPage>
                <OverviewContainer>
                    <RecordsContainer>
                        {cart.map(ci => (
                            <RecordCard>
                                <RecordImg src={ci.images[0].url}></RecordImg>
                                <RecordInfo>
                                    <h2>{ci.title}</h2>
                                    <p>{ci.artist}</p>
                                </RecordInfo>
                                <RemoveCard onClick={() => this.removeItem(ci.id)}>
                                    <i className="fa fa-trash"></i>
                                </RemoveCard>
                            </RecordCard>
                        ))}
                    </RecordsContainer>
                    <AddressContainer>
                        <h2>Insira o CEP</h2>
                        <Input value={this.state.address.cep} onChange={this.onChange}></Input>
                        <CalculateButton onClick={this.calculateShipping}>Calcular Frete</CalculateButton>  
                    </AddressContainer>
                </OverviewContainer>
                <PaymentContainer>
                    <FinishButton cart={true} onClick={this.finishSale}>Finalizar Compra</FinishButton>
                    <PaymentMethodArea>
                        <label>
                        <Radio
                            type="radio"
                            name="billet"
                            value="billet"
                            checked={this.state.paymentMethod === "billet"}
                            onChange={this.handleOptionChange}
                        />
                        Boleto
                        </label>
                        <label>
                        <Radio
                            type="radio"
                            name="credit_card"
                            value="credit_card"
                            checked={this.state.paymentMethod === "credit_card"}
                            onChange={this.handleOptionChange}
                        />
                        Cartão de Crédito
                        </label>
                    </PaymentMethodArea>
                    <PaymentInfo>
                        <div>Discos:</div>
                        <PaymentParagraph>{intlMonetary.format(recordsTotal)}</PaymentParagraph>
                        <div>Frete:</div>
                        <PaymentParagraph>R$ 44</PaymentParagraph>
                        <div styled={{ fontWeight: '800', fontSize: '2em'}}>Total:</div>
                        <PaymentTotal>{intlMonetary.format(total)}</PaymentTotal>
                        <br />
                        <br />
                        {address.street !== null ? this.addressBlock() : ''}
                    </PaymentInfo>
                </PaymentContainer>
                <CheckoutModal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    paymentMethod={paymentMethod}
                    trackingCode={trackingCode}
                    >

                </CheckoutModal>
            </CartPage>
        )   
    }
}

export default withRouter(Cart);
