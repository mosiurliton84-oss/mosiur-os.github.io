function openApp(id){
document.getElementById(id).classList.remove('hidden');
}

function closeApp(id){
document.getElementById(id).classList.add('hidden');
}

function openExternal(url){
window.open(url,'_blank');
}

function go(){
let url=document.getElementById('url').value;
if(!url.startsWith('http')){
url='https://www.google.com/search?q='+url;
}
document.getElementById('frame').src=url;
}

function saveNote(){
localStorage.setItem('note',document.getElementById('noteArea').value);
alert('Saved!');
}

window.onload=function(){
let note=localStorage.getItem('note');
if(note) document.getElementById('noteArea').value=note;
}

let current=null,ox=0,oy=0;

function dragStart(e,id){
current=document.getElementById(id);
ox=e.clientX-current.offsetLeft;
oy=e.clientY-current.offsetTop;
document.onmousemove=drag;
document.onmouseup=stop;
}

function drag(e){
if(current){
current.style.left=(e.clientX-ox)+'px';
current.style.top=(e.clientY-oy)+'px';
}
}

function stop(){
document.onmousemove=null;
}

function toggleStart(){
document.getElementById('startMenu').classList.toggle('hidden');
}
