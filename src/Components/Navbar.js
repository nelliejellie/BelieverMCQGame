import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () =>{
    return (
      <>
        <div>
          <Link to='/'></Link>
          <Link to='/login'></Link>
          <Link to='/game'></Link>
        </div>
        <div>
          <Outlet/>
        </div>
      </>
    )
  }


  export default Navbar;