import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = (props) => {
    const [socket] = useState(() => io(':8000'));
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const submitHandler = e => {
        e.preventDefault();
        socket.emit("message", {sender: props.name, text: message});
        setMessage("");
    }

    useEffect(() => {
        socket.on("chat", msg => {
            setMessages(prevMessages => {
                return [...prevMessages, msg];
            });
        });

        // return socket.disconnect(true);
    }, []);

    return (
        <div>
            <div>
                {messages.map((msg, idx) => <p key={idx}>{msg.sender} said: {msg.text}</p>)}
            </div>
            <form onSubmit={submitHandler}>
                <input type={"text"} onChange={e => setMessage(e.target.value)} value={message} />
                <input type={"submit"} value={"Send"} />
            </form>
            <p>The name is {props.name}</p>
        </div>
    )
}

export default Chat
