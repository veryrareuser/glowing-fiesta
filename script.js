// typing

const text = "Hello, I'm Carlos";
const typing = document.getElementById("typing");

let i = 0;

function type(){
if(i < text.length){
typing.innerHTML += text.charAt(i);
i++;
setTimeout(type,60);
}
}

type();



// PROJECT MODAL

const projects = [
{
title:"Project One",
desc:"Thrift App that allows users to buy and sell second-hand items, promoting sustainability and affordability."
},
{
title:"Project Two",
desc:"A student task organizer where user can list their tasks and set reminders to stay on top of their assignments and deadlines. All on terminal"
},
{
title:"Project Three",
desc:"My internsip website project."
},

];

function openModal(i){

document.getElementById("projectModal").style.display="flex";

document.getElementById("modalTitle").innerText = projects[i].title;
document.getElementById("modalDescription").innerText = projects[i].desc;

}

function closeModal(){

document.getElementById("projectModal").style.display="none";

}



// PARTICLE BACKGROUND

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*0.5,
vy:(Math.random()-0.5)*0.5
});
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x+=p.vx;
p.y+=p.vy;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);
ctx.fillStyle="#38bdf8";
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const indicator = document.querySelector(".nav-indicator");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{
const sectionTop = section.offsetTop;
if(scrollY >= sectionTop - 200){
current = section.getAttribute("id");
}
});

navLinks.forEach((link,index)=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

indicator.style.left = link.offsetLeft + "px";
indicator.style.width = link.offsetWidth + "px";

}

});

});