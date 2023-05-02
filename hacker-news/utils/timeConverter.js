import React from 'react';

const TimeConverter = (timeString) => {
    const DATE = new Date(timeString * 1000); 
    const YEAR = DATE.getUTCFullYear();
    const MONTH = DATE.getUTCMonth() + 1; // add 1 because getUTCMonth() returns values from 0 to 11
    const DAY = DATE.getUTCDate();
    const HOURS = DATE.getUTCHours();
    const MINUTES = DATE.getUTCMinutes();
    const SECONDS = DATE.getUTCSeconds();
    const STRING = `${YEAR}-${MONTH.toString().padStart(2, '0')}-${DAY.toString().padStart(2, '0')} ${HOURS.toString().padStart(2, '0')}:${MINUTES.toString().padStart(2, '0')}:${SECONDS.toString().padStart(2, '0')}`;

    return <p>{STRING}</p>
}

export default TimeConverter;