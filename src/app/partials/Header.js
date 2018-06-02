import React from 'react'
import sparta from '../images/sparta.png'

const Header = () =>{
    return (
        <div className="header">
            <img src={sparta} alt="sparta"/>
            <h5>SPARTANS</h5>
        </div>
    )
}

export default Header