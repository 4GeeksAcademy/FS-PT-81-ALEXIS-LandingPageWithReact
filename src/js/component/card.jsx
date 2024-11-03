import React from "react";

const Card = () =>{
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Fu8n6dp410RcvK0o_3mYtbMsr0UKeXaAsA&s" class="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title">Card title</h4>
    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis molestias ducimus et! Quo consectetur nulla accusamus odit quibusdam optio reiciendis soluta laborum eaque, molestiae quam ut earum, maxime facere expedita.</p>
  <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>

    );
};

export default Card;