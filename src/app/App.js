import React, { Component } from 'react';
import './App.css';
import { SocketProvider,  socketConnect,} from 'socket.io-react';
import io from 'socket.io-client';
import UserMessage from './message/UserMessage'
import BotMessage from './message/BotMessage'
import Header from './partials/Header'
import Footer from './partials/Footer'
import menu from './images/menu.svg'
import plane from './images/plane.svg'
import edit from './images/edit.svg'
import profile from './images/profile.svg'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      inputValue: '',
      botResponse: '',
      arr: []
    }

  }

  componentDidMount(){
    this.props.socket.on('bot message', (response)=>{
      this.setState(prevState => ({
        arr: [...prevState.arr,{text: response, type: 'bot'}]
     }))
    })
  }
  
  componentDidUpdate(){
    let chat = document.querySelector('.chat')
    chat.scrollTop = chat.scrollHeight  - chat.clientHeight
  }
  typing=(event)=>{
    this.setState({
      inputValue:event.target.value
    })
  }



  send= (event)=>{
    if(this.state.inputValue !== ''){
    this.props.socket.emit('send message',{text: this.state.inputValue})
    this.setState(prevState => ({
      arr: [...prevState.arr,{text: this.state.inputValue, type: 'user'}],
      inputValue: ''
   }))
  }
}


  sendOnEnter= (event)=>{
    if(event.key == 'Enter' && this.state.inputValue != ''){
      this.send()
      // this.setState({
      //   inputValue: ''
      // })
    }
  }


  render() {
    console.log(this.state.arr)
    return (
      <div id="container">
      <img className="edit" src={edit} alt="edit"/>
      <div className="profile">
        <img  src={profile} alt="profile"/>
        </div>
        <div className="main">
        <Header/>
        <div className="chat">
    {this.state.arr.map((el,i)=>{
        if(el.type === 'user'){
          return <UserMessage text={el.text} key={i} />
        }else{
          return <BotMessage text={el.text.message.text} options={el.text.message.options} key={i} />
        }
    })}
    </div>
    <div  className="sendingDiv">
     <div className="menuDiv">
      <img src={menu} alt="menu" /> 
     </div>
      <input type="text"onChange={this.typing} onKeyUp={this.sendOnEnter} placeholder="Type text here..." value={this.state.inputValue} />
      <div className="send" onClick={this.send}>
        <span>Send</span>
        <img src={plane} alt="plane"/>
      </div>  
    </div>
    <Footer/>
    </div>
    </div>
    );
  }
}

export default App;
