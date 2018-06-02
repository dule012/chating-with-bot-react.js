import React from 'react'
import jenna_logo_small from '../images/jenna_logo_small.svg'

const UserMessage = (props) =>{
    return(
        <div className="user">

            <div className="userImg">
                 <img src={jenna_logo_small}  alt='jenna'/>
            </div>
            <div className="userText">
                {props.text}
            </div>
        </div>
    )
}

export default UserMessage