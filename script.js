// Clock
function updateTime() {
    document.getElementById('time').textContent = new Date().toLocaleTimeString('bn-BD');
}
setInterval(updateTime, 1000); updateTime();

// Window Controls
function openApp(appId) {
    document.getElementById(appId).classList.remove('hidden');
    document.getElementById(appId).classList.add('active');
}

function closeApp(appId) {
    document.getElementById(appId).classList.remove('active');
    document.getElementById(appId).classList.add('hidden');
}

function minimizeApp(appId) {
    document.getElementById(appId).style.display = 'none';
}

function maximizeApp(appId) {
    const app = document.getElementById(appId);
    if (app.style.width === '95vw') {
        app.style.width = '800px'; app.style.height = '600px';
        app.style.transform = 'translate(-50%, -50%)';
    } else {
        app.style.width = '95vw'; app.style.height = '95vh';
        app.style.transform = 'none';
        app.style.left = '2.5vw';
        app.style.top = '2.5vh';
    }
}

function toggleStartMenu() {
    const startMenu = document.querySelector('.start-menu');
    startMenu.style.background = 'rgba(255,255,255,0.25)';
    setTimeout(() => startMenu.style.background = '', 200);
}

// External Links (iframe bypass)
function openExternal(url) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const urlSpan = document.getElementById('current-url');
    const hostname = new URL(url).hostname;
    urlSpan.textContent = '🔗 Opening ' + hostname;
    
    // New tab এ খুলবে
    window.open(url, '_blank');
}

// Drag Windows
let draggedElement = null, offsetX = 0, offsetY = 0;
function startDrag(e, appId) {
    draggedElement = document.getElementById(appId);
    const rect = draggedElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

function drag(e) {
    if (draggedElement) {
        draggedElement.style.position = 'fixed';
        draggedElement.style.left = (e.clientX - offsetX) + 'px';
        draggedElement.style.top = (e.clientY - offsetY) + 'px';
        draggedElement.style.transform = 'none';
        draggedElement.style.margin = '0';
    }
}

function stopDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    draggedElement = null;
}

// ESC to close all apps
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.app-window.active').forEach(app => {
            closeApp(app.id);
        });
    }
});
