  
import("./index.css")
import images from "../images/NotesLogo.png";


const nav=document.getElementById("nav");
nav.classList.add("nav");
const div_img=document.createElement("div");
const img=document.createElement("img");
img.src=images;
div_img.append(img);
const h= document.createElement("h1");
h.innerText="My Note Making App"
nav.append(div_img,h);




const card=document.getElementById("card")
const container = document.getElementById("main");
container.classList.add("container");

const right = document.createElement("div");
right.classList.add("maindiv")



const t=document.createElement("textarea");

t.classList.add("text")

let btn = document.createElement("button");
btn.classList.add("btn")
btn.innerHTML="Add Note";

container.append(t,btn);
card.append(container,right)
btn.onclick =()=>{
    const li = document.createElement("div");
    
    li.classList.add("list");
    if(t.value!=""){
        li.innerText=t.value;
        t.value="";
        right.appendChild(li)
    }
   
}
