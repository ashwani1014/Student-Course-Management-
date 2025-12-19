import {link} from "react-router-dom";
 function Navbar(){
    return (
  <nav style={{padding:"10px" , borderBottom:"1px solid #ccc"}}>
    <link to="/" style={{marginRight:"10px"}}>Home</link>
    <link to="/login" style={{marginRight:"10px" }}>Login</link>
    <link to ="/Signup" style={{marginRight:"10px"}}>Signup</link>
    <link to="/products">Products</link>
  </nav>
 
    );
 
 }


 export default Navbar;