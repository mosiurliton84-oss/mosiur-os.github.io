function updateTime() {
    const time = document.getElementById('time');
    time.textContent = new Date().toLocaleTimeString('bn-BD');
}
setInterval(updateTime, 1000);
updateTime();

function openApp(appId) {
    document.getElementById(appId).classList.remove('hidden');
    document.getElementById(appId).style.display = 'block';
}
function closeApp(appId) {
    document.getElementById(appId).classList.add('hidden');
}

// Drag window (optional advanced)
let isDragging = false;
document.querySelectorAll('.app-window .titlebar').forEach(titlebar => {
    titlebar.addEventListener('mousedown', () => { isDragging = true; });
});
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Drag logic here (add position change)
    }
});
document.addEventListener('mouseup', () => { isDragging = false; });
