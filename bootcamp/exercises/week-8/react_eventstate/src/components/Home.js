import React from "react";
import Item from "./Item";

function Home({ storeData }) {
    const { store, shouldDiscount } = storeData;

    return (
        <div>
            <h2>Store Page</h2>
            <ul>
                {store.map((item, index) => (
                    <Item key={index} item={item} shouldDiscount={shouldDiscount} />
                ))}
            </ul>
        </div>
    );
}

export default Home;