import React from "react";

function Item({ item, shouldDiscount }) {
    const { item: itemName, price, discount } = item;
    const discountedPrice = shouldDiscount ? price * (1 - discount) : price;

    return (
        <li>
            <p>{itemName}</p>
            <p>Price: ${discountedPrice}</p>
            <p>Discount: {discount * 100}%</p>
        </li>
    );
}

export default Item;