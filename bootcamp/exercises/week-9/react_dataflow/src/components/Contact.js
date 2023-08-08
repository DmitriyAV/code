import React from 'react';

function Contact(props) {
    return (
        <h1 key={props.name} onClick={() => props.onClick(props.name)}>{props.name}</h1>
    );
}

export default Contact;