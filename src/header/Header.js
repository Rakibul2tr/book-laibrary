import React from 'react';

const Header = () => {
    return (
        <div>
<nav className="navbar navbar-expand-lg text-white bg-dark">
  <div className="container">
    <a className="navbar-brand" href="h"> Ecommerce Shops</a>
    <div className="">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="h">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="h">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="h">Pricing</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;