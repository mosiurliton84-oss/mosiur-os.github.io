// Time Update
function updateTime() {
    const time = document.getElementById('time');
    time.textContent = new Date().toLocaleTimeString('bn-BD');
}
setInterval(updateTime, 1000);
updateTime();

// App Controls
function openApp(appId) {
    const app = document.getElementById(appId);
    app.classList.remove('hidden');
    app.classList.add('active');
    app.style.zIndex = '1000';
}

function closeApp(appId) {
    const app = document.getElementById(appId);
    app.classList.remove('active');
    app.classList.add('hidden');
}

function minimizeApp(appId) {
    const app = document.getElementById(appId);
    app.style.display = 'none';
}

function maximizeApp(appId) {
    const app = document.getElementById(appId);
    if (app.style.width === '90vw') {
        app.style.width = '700px';
        app.style.height = '500px';
    } else {
        app.style.width = '90vw';
        app.style.height = '90vh';
    }
}

function toggleStartMenu() {
    // Start menu animation
    document.querySelector('.start-menu').style.background = 'rgba(255,255,255,0.2)';
    setTimeout(() => {
        document.querySelector('.start-menu').style.background = '';
    }, 200);
}

// Drag Windows
let draggedElement = null;
let offsetX = 0, offsetY = 0;

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

// Close apps with ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.app-window.active').forEach(app => {
            closeApp(app.id);
        });
    }
});
