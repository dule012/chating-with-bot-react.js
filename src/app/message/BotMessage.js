import React from 'react'
import sparta from '../images/sparta.png'
import Circle from './circle'

const BotMessage = (props) => {
    return(
        <div className="bot">
            <div className="botImg">
                <img src={sparta} alt="sparta"/>
               <p> spartans</p>
            </div>
            <div className="botText">
                {props.text}
            </div>
            <div className="circleDiv">
        {props.options == undefined ? '' : props.options.map((el,i)=>{
            return <Circle number={el} key={i}/>
        })}
            </div>
        </div>
    )
}
export default BotMessage