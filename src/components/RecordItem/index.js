import React, { Component } from 'react';
import RecordModal from '../Modal/RecordModal';
import { withRouter, Link } from 'react-router-dom';
import { Record, ViewRecord, RecordImg, RecordTyping, ButtonsContainer, RecordButton, RecordPrice } from './styles';
class RecordItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
    }

    intlMonetary = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
    });

    closeModal = () => {
        this.setState({ isModalOpen: false })
    }

    openModal = () => {
        this.setState({ isModalOpen: true })
    }

    render() {
        const { imgPath, title, artist, genre, price } = this.props;
        console.log(imgPath);
        const { isModalOpen } = this.state;
        return (
            <Record>
                <ViewRecord onClick={this.openModal}>
                    <i className="fa fa-eye"></i>
                </ViewRecord>
                <RecordImg src={imgPath}></RecordImg>
                <RecordTyping><h1>{title}</h1></RecordTyping>
                <RecordTyping>
                    <p>{artist}</p>
                    <p>{genre}</p>
                </RecordTyping>
                <RecordPrice>{this.intlMonetary.format(price)}</RecordPrice>
                <ButtonsContainer>
                    <Link to='/cart'>
                        <RecordButton
                            cart={false}
                            onClick={(console.log('Yay!'))}
                        >
                        Comprar
                        </RecordButton>
                    </Link>
                    <RecordButton cart={true}>+ Carrinho</RecordButton>
                </ButtonsContainer>
                <RecordModal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    imgPath={imgPath}
                    title={title}
                    artist={artist}
                    genre={genre}
                    price={price}
                >
                </RecordModal>
            </Record>

        )
    }

}

export default withRouter(RecordItem);
