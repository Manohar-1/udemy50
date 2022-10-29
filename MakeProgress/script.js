const progress=document.getElementById("progress"); 
const next=document.getElementById("next"); 
const prev=document.getElementById("prev"); 
const circles=document.querySelectorAll(".circle");  

let currentActive=1;

next.addEventListener("click",()=>{
   currentActive++; 
   if(currentActive>circles.length) 
   {
     currentActive=circles.length;
   } 
   update();
}) 


prev.addEventListener("click",()=>{
    currentActive--; 
    if(currentActive<1) 
    {
      currentActive=1;
   } 
   update(); 
 }) 


 function update() 
 {
    circles.forEach((circle,idx)=>{
        if(idx<currentActive) 
        {
            circle.classList.add("active");
        } 
        else{
            circle.classList.remove("active");
        }
    })  
   
    let actives=document.querySelectorAll(".active"); 
    progress.style.width=(actives.length-1)/(circles.length-1)*100+'%';

    if(actives.length==1) 
    {
        prev.disabled=true;
    }else if(actives.length==circles.length) 
    {
        next.disabled=true;
    } 
    else{
        prev.disabled=false; 
        next.disabled=false;
    }

 }