import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';


const socket = io.connect('https://react-test-task-back.herokuapp.com/');

ReactDOM.render(<SocketProvider socket={socket}>
                    <App socket={socket}/>
                </SocketProvider>, document.getElementById('root'));
                
registerServiceWorker();