import React, { useState, useEffect } from 'react';

const CurrentTimeComponent = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <div>Current Time: {currentTime.toLocaleTimeString()}</div>;
};

export default CurrentTimeComponent;
