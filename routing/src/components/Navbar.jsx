import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div style={{display:"flex",justifyContent: "space-between" ,background:"white" ,color :"black",padding:"5px"}}>

      <Link to={"/"} style={{textDecoration:"none"}}>

        <h1>Kalvium
          <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
        </h1>

      </Link>
      <div style={{display: "flex",gap:"10px"}}>

        <Link to={"/about"}>
            <h3 style={{cursor:"pointer",textDecoration:"none"}}>About</h3> 

        </Link>

        <Link to={"/Contact"}>
          <h3 style={{cursor:"pointer",textDecoration:"none"}}>Contact</h3>
        </Link>
      </div>
    </div>
  )
}
