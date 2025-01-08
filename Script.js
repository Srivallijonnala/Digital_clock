function updateClock() {
    const clockElement = document.getElementById('c1');
    const dateElement = document.getElementById('p');
    const timeElement = document.getElementById('c2');

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const day = now.toLocaleString('default', { weekday: 'long' });
    const date = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${day}, ${month} ${date}, ${year}`;
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Set the initial time immediately
