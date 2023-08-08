import React from 'react';
import Contact from "./Contact";

function List(props) {

    console.log("List")
    return (
        <div>
            {props.users.map(nick => <Contact key={nick.with} name={nick.with} onClick={props.display} />)}
        </div>
    );
}

export default List;