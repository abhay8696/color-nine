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
