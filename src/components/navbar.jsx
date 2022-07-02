import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components'
function Navbar(){
    return(
        <Nav>
            <Link to = "/">Home</Link>
            <Link to = "/bookings">Bookings</Link>
            <Link to = "/login">Login</Link>

        </Nav>
    )
}
export default Navbar;

const Nav = styled.div`
        display:flex;
        flex-direction : row;
        justify-content : space-between;
        padding : 10px;
        font-size : 23px;
        border : 1px solid black;
        background-color : whitesmoke;
        border-radius: 8px;
        font-style : none;
        color : black;
`