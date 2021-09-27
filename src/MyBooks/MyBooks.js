import React from 'react';
import books from './MyBooks.css';

const MyBooks = (props) => {
    const {title,image,publisher,price,description,id,author}=props.Library;
    return (
        <div className="col-md-4">
           <div className="product-item">
              <img className="img-fluid  bg-light" src={image} alt="" />
             <div className="content">
                <h5>Book Name : {title}</h5>
                <p className="descrip"><strong>Info :</strong> <small>{description}</small></p>
                <h6>Author : {author}</h6>
                <h6>publisher : {publisher}</h6>
                <h6>Product Price :<strong className="fs-3"> ৳ </strong>{price}</h6>
                <div className="button-id">
                    <p className="id-nember m-0 me-1 text-center">Books ID : {id}</p>
                    <button onClick={()=> props.addedHendeler(props.Library)} className="btn btn-primary">
                        <i className="fas fa-shopping-cart pe-2"></i>Add Cart</button>
                </div>
             </div>
           </div>
        </div>
    );
};

export default MyBooks;