import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { CartContainer, CartHeader, CartItem, CartPage } from  './styles';
import { RecordTyping as CartTyping,
     RecordPrice as CartPrice }
    from '../../../components/RecordItem/styles';
import { UserImg as CartImg } from '../../../components/Modal/RecordModal/styles';

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
            img1: 'http://127.0.0.1:3333/images/1555458880016-blink-182_toypaj_cover.jpg',
            img2: 'http://127.0.0.1:3333/images/1555459489295-blink-182_neighborhoods_cover.jpg'
        }
    }

    render() {
        return (
            <CartPage>
                <CartHeader><i className="fa fa-shopping-cart"></i>Carrinho</CartHeader>
                <CartContainer>
                    <CartItem>
                        <CartImg src={this.state.img1}></CartImg>
                        <CartTyping><h1>Neighbourhoods</h1></CartTyping>
                        <CartTyping modal={true}>
                            <p>Blink-182</p>
                            <p>Pop-punk</p>
                        </CartTyping>
                        <CartPrice>{intlMonetary.format(50)}</CartPrice>
                    </CartItem>
                    <CartItem>
                        <CartImg src={this.state.img2}></CartImg>
                        <CartTyping><h1>Enema of State</h1></CartTyping>
                        <CartTyping modal={true}>
                            <p>Blink-182</p>
                            <p>Pop-punk</p>
                        </CartTyping>
                        <CartPrice>{intlMonetary.format(50)}</CartPrice>
                    </CartItem>
                </CartContainer>
                <CartPrice>Total: {intlMonetary.format(100)}</CartPrice>
            </CartPage>
        )   
    }
}

export default withRouter(Cart);
