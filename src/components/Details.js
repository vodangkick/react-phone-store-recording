import React, { Component } from 'react';
import { ProductConsumer } from "./Context";
// import { link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, inCart } = value.detailProduct;
                    return (
                        <div>
                            {id}
                            {title}
                            <ButtonContainer disabled={inCart ? true : false}
                                onClick={() => { value.addToCart(id) }}
                            >
                                {inCart ? 'in cart' : 'add to cart'}
                            </ButtonContainer>
                        </div>

                    )
                }}

            </ProductConsumer>
        )
    }
}
