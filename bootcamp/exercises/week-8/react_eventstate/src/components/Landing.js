import React from "react";
import Item from "./Item";

function Landing({ user, hottestItem }) {
    return (
        <div>
            <h1>Welcome, {user}!</h1>
            {hottestItem && (
                <div>
                    <h3>Hottest Item in the Store:</h3>
                    <Item item={hottestItem} />
                </div>
            )}
        </div>
    );
}

export default Landing;
