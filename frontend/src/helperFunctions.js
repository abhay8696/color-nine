/**
 * Generates a countdown timer that calculates remaining minutes and seconds.
 *
 * @param {number} min - The interval for resetting minutes. Default is 1 minute.
 * @returns {Object} - An object containing the formatted minutes and seconds.
 *
 * Example:
 * If the current time is 10:05:45 and `min = 1`,
 * the function returns { minutes: '00', seconds: '15' }
 * (i.e., 15 seconds remaining to the next minute).
 */
export const getCountDown = (min = 1) => {
    // Get the current date and time.
    const now = new Date();

    // Calculate remaining minutes within the hour (in reverse).
    // Example: If it's 10:05, 60 - 5 = 55 minutes remaining in the hour.
    const minutes = 60 - String(now.getMinutes()).padStart(2, "0");

    // Calculate remaining seconds within the minute (in reverse).
    // Example: If it's 10:05:45, 60 - 45 = 15 seconds remaining in the minute.
    const seconds = 60 - Number(String(now.getSeconds()).padStart(2, "0"));

    // Calculate how many minutes are left based on the specified interval `min`.
    // If `min = 1`, this will simply be `minutes % 1 = 0`.
    let minString = minutes % min;

    // Handle the case where seconds hit 60 (reset to 0).
    // This ensures the countdown doesn't show '60' but rolls back to '00' instead.
    let secString = seconds == 60 ? 0 : seconds;

    // Format the minute string to always show two digits (e.g., '05' instead of '5').
    minString < 10 ? (minString = `0${minString}`) : minString;

    // Format the second string to always show two digits (e.g., '09' instead of '9').
    secString < 10 ? (secString = `0${secString}`) : secString;

    // Return the formatted minutes and seconds as an object.
    return { minutes: minString, seconds: secString };
};

/**
 * Calculates the total number of minutes passed since 00:00 (midnight) today.
 *
 * @returns {number} - The total minutes passed since midnight.
 */
export const getMinutesSinceMidnight = () => {
    const now = new Date(); // Get the current date and time

    const hours = now.getHours(); // Get the current hour (0-23)
    const minutes = now.getMinutes(); // Get the current minute (0-59)

    // Total minutes passed = (hours * 60) + minutes
    return hours * 60 + minutes;
};

/**
 * Calculates how many n-minute windows have passed since midnight (00:00).
 *
 * @param {number} n - The size of each window in minutes.
 * @returns {number} - The number of n-minute windows that have passed.
 */
export const getWindowsSinceMidnight = (n) => {
    if (n <= 0) {
        throw new Error("Window size must be a positive number.");
    }

    const now = new Date(); // Get the current date and time

    const hours = now.getHours(); // Get the current hour (0-23)
    const minutes = now.getMinutes(); // Get the current minute (0-59)

    // Total minutes passed since midnight
    const totalMinutes = hours * 60 + minutes;

    // Calculate the number of n-minute windows
    return Math.floor(totalMinutes / n);
};

/**
 * Generates a unique series string based on the current date and time.
 * The series string is formatted as YYYYMMDD followed by the number of
 * n-minute windows that have passed since midnight, padded to 4 digits.
 *
 * @param {number} window - The size of each time window in minutes.
 * @returns {string} - A string representing the series in the format YYYYMMDDWWWW,
 * where WWWW is the number of windows since midnight.
 */
export const getSeries = (window = 1) => {
    // Get the current date and time
    const now = new Date();

    // Retrieve the current year (e.g., 2024)
    const year = now.getFullYear();

    // Retrieve the current month (0-11, so add 1 for human-readable format),
    // and ensure it is formatted as a two-digit string (e.g., '04' for April).
    const month = String(now.getMonth() + 1).padStart(2, "0");

    // Retrieve the current day of the month,
    // and ensure it is formatted as a two-digit string (e.g., '05' for the 5th).
    const day = String(now.getDate()).padStart(2, "0");

    // Calculate the number of n-minute windows that have passed since midnight
    // by calling a function (getWindowsSinceMidnight) and pad the result
    // to ensure it is 4 digits (e.g., '0005' for 5 windows).
    const windowsSinceMidnight = String(
        getWindowsSinceMidnight(window)
    ).padStart(4, "0");

    // Concatenate year, month, day, and the padded window count into a single string
    // and return the resulting series.
    return `${year}${month}${day}${window}${windowsSinceMidnight}`;
};
