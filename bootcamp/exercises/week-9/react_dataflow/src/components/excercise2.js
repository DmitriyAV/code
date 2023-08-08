import React, {useState} from 'react';
import List from "./List";
import Conversation from "./Conversation"

function Exercise2() {

    const [chat, setChat] = useState({
        displayConversation: null,
        conversations: [
            {
                with: "Laura", convo: [
                    {text: "Hi", sender: "self"},
                    {text: "You there?", sender: "self"},
                    {text: "Yeah, hi, what's up?", sender: "other"}
                ]
            },
            {
                with: "Dad", convo: [
                    {text: "Have you finished your school work yet?", sender: "other"},
                    {text: "Yes.", sender: "self"},
                    {text: "What do you mean, yes?", sender: "other"},
                    {text: "??", sender: "self"}
                ]
            },
            {
                with: "Shoobert", convo: [
                    {text: "Shoobert!!!", sender: "self"},
                    {text: "Dude!!!!!!!!", sender: "other"},
                    {text: "Shooooooooo BERT!", sender: "self"},
                    {text: "You're my best friend", sender: "other"},
                    {text: "No, *you're* my best friend", sender: "self"},
                ]
            }
        ]
    })

    const displayConvo = (name) => {
        const newDisplay = {...chat, displayConversation: name}
        setChat(newDisplay)
    }

    const backToMain = () => {
        const displayNullble = {...chat, displayConversation: null}
        setChat(displayNullble)
    }

    const sendConversation = (name) => {
       return chat.conversations.find(conv => conv.with === name)
    }

    return (
        <div>
            {chat.displayConversation === null ? <List users={chat.conversations} display={displayConvo}/> :
                <Conversation convo={sendConversation(chat.displayConversation)} sender={chat.displayConversation} back={backToMain}/>}
        </div>
    );
}

export default Exercise2;