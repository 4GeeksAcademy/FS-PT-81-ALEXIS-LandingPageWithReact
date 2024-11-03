import React from "react";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body  text-white " data-bs-theme="dark">

       
  <div className="container-fluid">
    
    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
    <button 
    className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse " id="navbarNav" style={{ justifyContent: "space-between" }}>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-secondary" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
    </div>
</nav>
       
      
      
    
    );
};

export default Navbar;