import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NameForm = (props) => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const submitHandler = e => {
        e.preventDefault();
        props.liftName(name);
        setName("");
        navigate('/chat')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>I want to start chatting with the name ...</p>
                <input type={"text"} onChange={e => setName(e.target.value)} value={name} />
                <input type={"submit"} value={"Start Chatting"} />
            </form>
        </div>
    )
}

export default NameForm
