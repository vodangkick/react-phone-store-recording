import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                    <button className="btn-outline-danger text-uppercase mb-3 text-right"
                        type="button"
                        onClick={() => clearCart()}
                    >
                        Clear cart
                    </button>
                </Link>
                <h5>
                    <span className="text-title">
                        subtotal :
                    </span>
                    <strong>
                        $ {cartSubTotal}
                    </strong>
                </h5>
                <h5>
                    <span className="text-title">
                        Tax :
                    </span>
                    <strong>
                        $ {cartTax}
                    </strong>
                </h5>
                <h5>
                    <span className="text-title">
                        Totals :
                    </span>
                    <strong>
                        $ {cartTotal}
                    </strong>
                </h5>

            </div>
        </React.Fragment>

    )
}
