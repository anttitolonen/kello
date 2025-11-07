function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    let secondsNumber = now.getSeconds();
    secondsNumber = 5 * Math.round(secondsNumber / 5);
    const seconds = secondsNumber.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}


// update every second
setInterval(() => {
    const currentTimeElement = document.getElementById('currentTime');
    if (currentTimeElement) {
        currentTimeElement.textContent = getCurrentTime();
    }
}, 1000);

// Initial call to display time immediately on load
const currentTimeElement = document.getElementById('currentTime');
if (currentTimeElement) {
    currentTimeElement.textContent = getCurrentTime();
}