import React, { useEffect, useState } from 'react';
import MyBooks from '../MyBooks/MyBooks';
import BooksCart from '../BooksCart/BooksCart';
import LibraryCss from './Library.css';

const Library = () => {
    const [Librarys , setLibrarys] = useState([]);
    const [cart , setCart]=useState([])

    useEffect( ()=>{
        fetch('/fack-data.json')
        .then(res => res.json())
        .then(data=>setLibrarys(data))
    },[])

    const addedHendeler = (productName)=>{
        const newValu=[...cart,productName]
        setCart(newValu);
    }
    return (
        <div className="container">
        <div className="row">
        <div className="col-md-10 market-aria">
            <div>
               <h1 className="py-5 bg-transparent border-bottom">Total Books of Our Library: {Librarys.length}</h1>
               <div className="row">
               {
                   Librarys.map(item =><MyBooks
                    key={item.id} 
                   Library={item}
                   addedHendeler={addedHendeler}
                   ></MyBooks>)
               }
               </div>
            </div>
        </div>
        <div className="col-md-2">
            <BooksCart
            cart = {cart}
            ></BooksCart>
        </div>
        </div>
    </div>
    );
};

export default Library;