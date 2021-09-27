import React from 'react';

const Header = () => {
    return (
        <div className="border-bottom border-5 border-info">
          <nav className="navbar navbar-expand-lg text-white bg-dark">
            <div className="container">
              <a className="navbar-brand text-white fw-bold" href="h">BOOKS LIBRARY</a>
              <div className="">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active  text-white" aria-current="page" href="h">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="h">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="h">Pricing</a>
                  </li>
                
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Header;