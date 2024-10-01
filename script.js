
window.onload = function() {
    const clockElement = document.getElementById('clock');
    const alarmForm = document.getElementById('alarmForm');
    const alarmTimeInput = document.getElementById('alarmTime');
    const alarmMessage = document.getElementById('alarmMessage');

    let alarmTime = null;
    let alarmTimeout = null;

    // Display current time
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clockElement.textContent = timeString;

        // Check if alarm time is reached
        if (alarmTime && now >= alarmTime) {
            alarmMessage.textContent = 'Alarm ringing!';
            alarmTimeout = null;
        }

        setTimeout(updateClock, 1000);
    }

    // Handle alarm form submission
    alarmForm.onsubmit = function(event) {
        event.preventDefault();
        const timeParts = alarmTimeInput.value.split(':');
        const now = new Date();
        alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), timeParts[0], timeParts[1], timeParts[2] || 0);
        
        if (alarmTime <= now) {
            alarmTime.setDate(now.getDate() + 1); // Set for the next day if the time is in the past
        }

        alarmMessage.textContent = `Alarm set for ${alarmTime.toLocaleTimeString()}`;
        if (alarmTimeout) {
            clearTimeout(alarmTimeout);
        }
    };

    updateClock(); // Start the clock
};
