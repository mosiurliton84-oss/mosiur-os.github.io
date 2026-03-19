function updateTime() {
    document.getElementById('time').textContent = new Date().toLocaleTimeString('bn-BD');
}
setInterval(updateTime, 1000); updateTime();

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
    } else {
        app.style.width = '95vw'; app.style.height = '95vh';
    }
}

function toggleStartMenu() {
    document.querySelector('.start-menu').style.background = 'rgba(255,255,255,0.25)';
    setTimeout(() => document.querySelector('.start-menu').style.background = '', 200);
}

// Drag functionality
let draggedElement = null, offsetX = 0, offsetY = 0;
function startDrag(e, appId) {
    draggedElement = document.getElementById(appId);
    const rect = draggedElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left; offsetY = e.clientY - rect.top;
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}
function drag(e) {
    if (draggedElement) {
        draggedElement.style.position = 'fixed';
        draggedElement.style.left = (e.clientX - offsetX) + 'px';
        draggedElement.style.top = (e.clientY - offsetY) + 'px';
        draggedElement.style.transform = 'none';
    }
}
function stopDrag() {
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    draggedElement = null;
}
