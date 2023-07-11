import React, { useEffect, useState } from 'react';

function Timer() {
    const timeSet = () => {
        const now = new Date();
        const day = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
        const timeDiff = Math.floor((day - now) / 1000);

        const hours = Math.floor(timeDiff / 3600);
        const minutes = Math.floor((timeDiff % 3600) / 60);
        const seconds = timeDiff % 60;

        return { hours, minutes, seconds };
    };

    const [time, setTime] = useState(timeSet());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(timeSet());
        }, 1000); 

        const consoleInterval = setInterval(() => {
        console.log("1분이 지남");
        }, 60000);

        return () => {
        clearInterval(interval);
        clearInterval(consoleInterval);
        };
    }, []);

    return (
        <div>
        <p>오늘이</p>
        <h2>
            {time.hours.toString().padStart(2, '0')}:
            {time.minutes.toString().padStart(2, '0')}:
            {time.seconds.toString().padStart(2, '0')}
        </h2>
        <p>밖에 안남았다니..</p>
        </div>
    );
}

export default Timer;
