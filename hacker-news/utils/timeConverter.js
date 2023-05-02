/*
    This module contains a single component that takes a UNIX timestamp as an argument and returns a string in the format YYYY-MM-DD HH:MM:SS.
    It is used to convert the "created" timestamp of a user account from the Hacker News API into a human-readable format.
*/

// Define the TimeConverter component as an arrow function that takes a single argument (timeString)
const TimeConverter = (timeString) => {
    const DATE = new Date(timeString * 1000); 
    const YEAR = DATE.getUTCFullYear();
    const MONTH = DATE.getUTCMonth() + 1; // add 1 because getUTCMonth() returns values from 0 to 11
    const DAY = DATE.getUTCDate();
    const HOURS = DATE.getUTCHours();
    const MINUTES = DATE.getUTCMinutes();
    const SECONDS = DATE.getUTCSeconds();
    // Create a string in the desired format using template literals and the padStart() method to add leading zeros to single-digit values
    const STRING = `${YEAR}-${MONTH.toString().padStart(2, '0')}-${DAY.toString().padStart(2, '0')} ${HOURS.toString().padStart(2, '0')}:${MINUTES.toString().padStart(2, '0')}:${SECONDS.toString().padStart(2, '0')}`;

    return <p>{STRING}</p>
}

// Export the TimeConverter component as the default export of this module
export default TimeConverter;