import React, { Component } from 'react';
import { ButtonContainer } from './Button';
import { ProductConsumer } from './Context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Modal extends Component {
    render() {
        return (
            <div>
                <ProductConsumer>
                    {value => {
                        const { modalOpen, closeModal } = value;
                        const { img, title, price } = value.modalProduct;
                        if (!modalOpen) {
                            return null;
                        }
                        else {
                            return (
                                <ModalContainer>
                                    <div className="container">
                                        <div className="row">
                                            <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                                <h5>
                                                    item add to the cart
                                                    <img src={img} className="img-fluid" alt="product" />
                                                    <h5>{title}</h5>
                                                    <h5 className="text-muted">price : ${price}</h5>
                                                    <Link to="/">
                                                        <ButtonContainer onClick={() => closeModal()}>
                                                            Store
                                                        </ButtonContainer>
                                                    </Link>
                                                    <Link to="/cart">
                                                        <ButtonContainer onClick={() => closeModal()}>
                                                            Go to Cart
                                                        </ButtonContainer>
                                                    </Link>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </ModalContainer>
                            );
                        }
                    }}
                </ProductConsumer>

            </div>
        )
    }
}

const ModalContainer = styled.div`
position:fixed;
top:0px;
left:0px;
right:0px;
bottom:0px;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background:var(--mainWhite);
}
`;