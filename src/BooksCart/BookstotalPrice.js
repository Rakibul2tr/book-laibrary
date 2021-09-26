import React from 'react';

const BookstotalPrice = (props) => {
    const {title,image}=props.element;
    
    return (
        <div>
            <h6 className="text-start d-flex align-items-center mt-2">
                <li>{title}</li>
                <img className="rounded-circle img-thumbnail ms-2" src={image} alt="" />
            </h6>
            
        </div>
    );
};

export default BookstotalPrice;