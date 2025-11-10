class AppState {
    updateInterval: number;
    precision: number;
    timeFormat: string;

    constructor() {
        this.updateInterval = 1000; // default to 1 second
        this.precision = 5; // default to 5 seconds
        this.timeFormat = 'hh:mm:ss';
    }
}

function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    let secondsNumber = now.getSeconds();
    secondsNumber = appState.precision * Math.floor(secondsNumber / appState.precision);
    const seconds = secondsNumber.toString().padStart(2, '0');
    if (appState.timeFormat === 'hh:mm') {
        return `${hours}:${minutes}`;
    } else if (appState.timeFormat === 'hh:mm:ss') {
        return `${hours}:${minutes}:${seconds}`;
    } else {
        throw new Error('Unsupported time format');
    }
}

const appState = new AppState();
const currentTimeElement = document.getElementById('currentTime');

// update every second
setInterval(() => {
    if (currentTimeElement) {
        currentTimeElement.textContent = getCurrentTime();
    }
}, 1000);

// Initial call to display time immediately on load
if (currentTimeElement) {
    currentTimeElement.textContent = getCurrentTime();
}

// Add button event listeners
const hhmmButton = document.querySelectorAll('.settingsButton')[0];
const hhmmssButton = document.querySelectorAll('.settingsButton')[1];

hhmmButton?.addEventListener('click', () => {
    appState.timeFormat = 'hh:mm';
    if (currentTimeElement) {
        currentTimeElement.textContent = getCurrentTime();
    }
});

hhmmssButton?.addEventListener('click', () => {
    appState.timeFormat = 'hh:mm:ss';
    if (currentTimeElement) {
        currentTimeElement.textContent = getCurrentTime();
    }
});