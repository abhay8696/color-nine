export const getCountDown = () => {
    const now = new Date();
    // const hours = String(now.getHours()).padStart(2, "0");
    // const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = 60 - Number(String(now.getSeconds()).padStart(2, "0"));

    return seconds == 60 ? 0 : seconds;
};
