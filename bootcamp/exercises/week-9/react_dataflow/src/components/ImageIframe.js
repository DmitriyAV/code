import {useState} from "react";

export default function ImageIframe() {

    const [vegetables, setVegetable] = useState({
        images: [
            "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
            "https://m.media-amazon.com/images/I/51T3025eGcL._AC_UF1000,1000_QL80_.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg"],
        currentImg: 0
    })

    const get = {...vegetables}
    const url = get.images
    const order = get.currentImg

    const shiftImageBack = () => {
        setVegetable((prevCurrentImg) => prevCurrentImg - 1);
    };

    const shiftImageForward = () => {
        setVegetable((prevCurrentImg) => prevCurrentImg + 1);
    };


    return (
        <div>
            <img src={url[order]} alt="Gallery"/>
            <button className="back" onClick={shiftImageBack}>Back</button>
            <button className="forward" onClick={shiftImageForward}>Forward</button>
        </div>
    );
};
