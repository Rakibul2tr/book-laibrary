import React from 'react';
import BookstotalPrice from './BookstotalPrice';

const BooksCart = (props) => {
    const {cart} = props || {};
    const totalReducer=(prevuse,corrent)=>prevuse+corrent.price;
    const total = cart.reduce(totalReducer ,0)
    const totalAmount= total.toFixed(2)
    console.log(total);
    return (
        <div className="position-fixed bg-primary p-3 text-white">
            <h2>Added Cart and Price</h2>
                <div className="product-invoic text-start pt-2">
                    <h5>Added Cart : {cart.length} Pice</h5>
                    <h5>Total Price : {totalAmount}<strong className="fs-3"> ৳</strong></h5>
                    {
                        cart.map(element=><BookstotalPrice
                        element={element}
                        ></BookstotalPrice>)
                    }          
             </div>
        </div>
    );
};

export default BooksCart;