import React from 'react';

function Conversation(props) {
    console.log(props.convo)

    const backToMain = () => { props.back() }
    return (
        <div>
            {props.convo.convo.map(m => <div key={m.with}>{m.sender === "self" ? "Me" : props.sender} : {m.text}</div>)}
            <button className={"back"} onClick={() => backToMain()}>Back</button>
        </div>
    );
}

export default Conversation;