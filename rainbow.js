const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['black','purple','white','peach','blue','orange','red','gray'];
body.style.backgroundColor='green';
document.addEventListener('click',function(){
const colorIndex=parseInt(Math.random()*color.length);
body.style.backgroundColor=color[colorIndex];
});