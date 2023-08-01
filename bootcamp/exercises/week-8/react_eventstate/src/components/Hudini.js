import {useState} from "react";

function Hudini(props) {

    let showed = "Now you see me!"
    let diaper = "Now you don't!"

    let [show, setShow] = useState(false)
    let [text, setText] = useState("")

    const changeVisibility = () => {
        show === false ? setShow(true) : setShow(false)
        show === false ? setText(diaper) : setText(showed)
        console.log(show)
    }


    return (<div>
            <div>{text}</div>
            <button onClick={changeVisibility}>Change visibility</button>
        </div>
    )
}

export default Hudini

