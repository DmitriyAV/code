import React, { useState } from "react";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
    const [storeData, setStoreData] = useState({
        user: "Robyn",
        store: [
            { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
            { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
            { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
        ],
        shouldDiscount: false,
        currentPage: "Landing"
    });

    const handlePageChange = (page) => {
        setStoreData((prevState) => ({
            ...prevState,
            currentPage: page
        }));
    };

    return (
        <div>
            <div>
                <button onClick={() => handlePageChange("Landing")}>Go to Landing</button>
                <button onClick={() => handlePageChange("Home")}>Go to Home</button>
            </div>
            {storeData.currentPage === "Landing" ? (
                <Landing user={storeData.user} hottestItem={getHottestItem(storeData.store)} />
            ) : (
                <Home storeData={storeData} />
            )}
        </div>
    );
}

// Helper function to get the hottest item
function getHottestItem(store) {
    return store.find((item) => item.hottest);
}

export default App;