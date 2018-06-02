import React from 'react'
import jenna from '../images/jenna_logo_small.svg'


const Footer = () => {
    return(
       <div className="footer">
           Terms|Conditions|Privacy Policy|Powered By 
           <img src={jenna} width="40" alt="jenan"/>
       </div>
    )
}

export default Footer